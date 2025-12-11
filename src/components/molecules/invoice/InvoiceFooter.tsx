const InvoiceFooter = () => (
  <div
    style={{
      paddingTop: "10px",

      fontSize: "12px",
      // color: "#666",
      textAlign: "center",
    }}
    className=" print:block print:fixed print:bottom-0 print:left-0 print:right-0 print:bg-white print:text-center print:p-2 print:text-sm"
  >
    Aceasta este o factură generată automat. Mulțumim pentru colaborare!
  </div>
);

export default InvoiceFooter;
