import { IClient } from "@/modules/clients/domain/types/client.types";
import React, { FC } from "react";
import InvoiceMetaClient from "../../molecules/invoice/InvoiceMetaClient";
import InvoiceMetaCompany from "../../molecules/invoice/InvoiceMetaCompany";
type InvoiceMetaProps = {
  client: IClient;

  orderId: string;
};
const InvoiceMeta: FC<InvoiceMetaProps> = ({ client, orderId }) => {
  return (
    <div className="flex justify-between items-center flex-wrap print:flex-nowrap">
      <section style={{ marginTop: "20px" }}>
        <InvoiceMetaClient id={""} name={client.name} email={client.email} />
        <p>
          <strong>OrderId:</strong>
          {orderId}
        </p>
      </section>
      <section style={{ marginTop: "20px" }}>
        <InvoiceMetaCompany />
      </section>
    </div>
  );
};

export default InvoiceMeta;
