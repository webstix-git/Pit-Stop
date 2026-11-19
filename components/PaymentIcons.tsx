export default function PaymentIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`pay-icons ${className}`.trim()} aria-label="Accepted payment methods">
      <span className="pay-badge">
        <img src="/assets/pay/cash.svg" alt="Cash" />
      </span>
      <span className="pay-badge">
        <img src="/assets/pay/check.svg" alt="Check" />
      </span>
      <span className="pay-badge">
        <img src="/assets/pay/credit.svg" alt="Credit" />
      </span>
      <span className="pay-badge">
        <img src="/assets/pay/debit.svg" alt="Debit" />
      </span>
      <span className="pay-badge">
        <img src="/assets/pay/venmo.svg" alt="Venmo" />
      </span>
    </div>
  );
}
