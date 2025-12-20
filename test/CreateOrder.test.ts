import { describe, it, expect, vi, beforeEach } from "vitest";
import { useGithubIssueTemplate } from "../src/shared/data/consts/githubIssuesTemplate/useGithubIssueTemplate";
import { CreateOrder } from "../src/modules/orders/application/use-cases/createOrder.usecase";
import { IServiceOrder } from "../src/modules/orders/domain/types/order.types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
describe("CreateOrder Use Case", () => {
  let orderRepository: any;
  let clientRepository: any;
  let serviceOrderItemRepository: any;
  let taskRepository: any;
  let githubService: any;
  let useCase: CreateOrder;

  beforeEach(() => {
    orderRepository = {
      create: vi.fn().mockResolvedValue({ id: "order123" }),
    };

    clientRepository = {
      findByEmail: vi.fn().mockResolvedValue(null),
      create: vi.fn().mockResolvedValue({ id: "client123" }),
    };

    serviceOrderItemRepository = {
      create: vi
        .fn()
        .mockImplementation((item) =>
          Promise.resolve({ id: "item123", ...item })
        ),
    };

    taskRepository = {
      create: vi.fn().mockResolvedValue(true),
    };

    githubService = {
      createFeatureIssues: vi.fn().mockReturnValue({}),
    };

    useCase = new CreateOrder(
      orderRepository,
      clientRepository,
      serviceOrderItemRepository,
      githubService,
      taskRepository
    );
  });

  it("should create client, order and items correctly", async () => {
    // Arrange
    const fakeOrder: IServiceOrder = {
      serviceId: "order123",
      orderNo: 12,
      client: { name: "Alex", email: "alex@test.com" },
      projectName: "mere",
      items: [
        {
          id: "starter-website-seo-ready", // this matches your template
          name: "SEO Ready",
          quantity: 1,
          orderId: "",
          showPrice: false,
          createdAt: new Date(),
        },
      ],
      id: "",
      clientId: "order123",
      initialPrice: 0,
      totalPrice: 0,
      status: "IN_PROGRESS",
      createdAt: new Date(),
      isDeleted: false,
    };

    // Act
    await useCase.execute(fakeOrder);

    // Assert
    expect(clientRepository.create).toHaveBeenCalled();
    expect(orderRepository.create).toHaveBeenCalled();
    expect(serviceOrderItemRepository.create).toHaveBeenCalled();
    expect(taskRepository.create).toHaveBeenCalled();
  });

  it("should create GitHub issues when template exists", async () => {
    const fakeOrder: IServiceOrder = {
      serviceId: "order123",
      orderNo: 12,
      client: { name: "Alex", email: "alex@test.com" },
      projectName: "mere",
      items: [
        {
          id: "starter-website-seo-ready", // template exists
          name: "SEO Ready",
          quantity: 1,
          orderId: "order123",
          showPrice: false,
          createdAt: new Date(),
        },
      ],
      id: "",
      clientId: "order123",
      initialPrice: 0,
      totalPrice: 0,
      status: "IN_PROGRESS",
      createdAt: new Date(),
      isDeleted: false,
    };

    await useCase.execute(fakeOrder);

    const template = useGithubIssueTemplate["starter-website-seo-ready"];

    expect(githubService.createFeatureIssues).toHaveBeenCalledWith(
      "order123",
      template
    );
  });

  it("should NOT call GitHub if template does not exist", async () => {
    const fakeOrder: IServiceOrder = {
      serviceId: "order123",
      orderNo: 12,
      client: { name: "Alex", email: "alex@test.com" },
      projectName: "mere",
      items: [
        {
          id: "unknown-feature", // no template
          name: "Random",
          quantity: 1,
          orderId: "",
          showPrice: false,
          createdAt: new Date(),
        },
      ],
      id: "",
      clientId: "",
      initialPrice: 0,
      totalPrice: 0,
      status: "IN_PROGRESS",
      createdAt: new Date(),
      isDeleted: false,
    };

    await useCase.execute(fakeOrder);

    expect(githubService.createFeatureIssues).not.toHaveBeenCalled();
  });
});
