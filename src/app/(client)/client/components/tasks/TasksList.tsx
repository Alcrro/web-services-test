"use client";
import {
  ITask,
  TaskStatusMapperFrontendURL,
} from "@/modules/tasks/domain/types/task.types";
import style from "@/components/styles/tasksList.module.scss";
import { STATUS_TASKS_ICON_MAP } from "@/shared/data/mappers/orderTasksStatusIconMapper";
import { usePathname, useRouter } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

const TasksList = ({
  tasks,
}: {
  tasks: ITask[];
  searchParams?: Record<string, string | string[]>;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  // const options = mapSearchParamsOptions<ITask>(searchParams);

  // const {
  //   data: reactQueryData,
  //   isPending,
  //   isLoading,
  //   isFetching,
  // } = useTaskQuery(options, { data: tasks });

  // const showSkeleton = isLoading || isPending || isFetching;

  const filterHandle = (param: string) => {
    console.log(param);

    router.push(`${pathname.toString()}?filters=status&value=${param}`);
  };

  return (
    <>
      {!tasks || tasks.length === 0 ? (
        <div>no tasks</div>
      ) : (
        <>
          <div className="filters">
            status
            <select
              name="status"
              id=""
              onClick={(e) => filterHandle(e.currentTarget.value)}
            >
              {Object.entries(TaskStatusMapperFrontendURL).map(([key, val]) => (
                <option key={key} value={key} className="bg-(--color-bg)">
                  {val}
                </option>
              ))}
            </select>
          </div>
          {/* {showSkeleton ? (
            <TaskItemSkeleton tasks={tasks} />
          ) : ( */}
          <div
            className={`${style.tasks_list} grid gap-2 p-2 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-h-[490px] h-full overflow-y-auto`}
          >
            {tasks.map((task, key) => {
              const status = STATUS_TASKS_ICON_MAP[task.status];
              if (!status) return null;

              const { Icon, colorClass, animated } = status;

              return (
                <Link
                  href={`/client/control-panel/projects/tasks/${task.id}`}
                  key={key}
                  className="flex flex-col gap-2 bg-(--color-bg) rounded-lg p-2 relative z-10"
                >
                  {/* <Github className="absolute w-22 h-full" /> */}
                  <Image
                    src={"/images/github-mark.png"}
                    alt="github"
                    width={1000}
                    height={1000}
                    className="absolute z-0 opacity-40 w-16 left-1/2 top-1/2 -translate-1/2 hover:scale-125 duration-200 pointer-events-none"
                  />
                  <div className="flex justify-between relative z-10">
                    <div title={task.status}>
                      <Icon
                        className={`${colorClass} w-5 h-5 ${
                          animated ? "animate-pulse" : ""
                        }`}
                      />
                    </div>
                    <div className="font-semibold">{task.title} </div>
                  </div>
                  <div>{!task.order ? "-" : `# ${task.order.orderNo}`}</div>
                </Link>
              );
            })}
          </div>
          {/* ) */}
          {/* } */}
        </>
      )}
    </>
  );
};

export default TasksList;
