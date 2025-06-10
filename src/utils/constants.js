export const OrderStatus = Object.freeze({
  Pending: 0,
  Preparing: 1,
  Ready: 2,
  Failed: 3,
  Completed: 4,
});

export const PaymentStatus = Object.freeze({
  Created: 0,
  Paid: 1,
  Refund: 2,
});

export const orderStatusLabels = {
  [OrderStatus.Pending]: "Beklemede",
  [OrderStatus.Preparing]: "Hazırlanıyor",
  [OrderStatus.Ready]: "Hazır",
  [OrderStatus.Failed]: "Başarısız",
  [OrderStatus.Completed]: "Tamamlandı",
};

export const paymentStatusLabels = {
  [PaymentStatus.Created]: "Oluşturuldu",
  [PaymentStatus.Paid]: "Ödendi",
  [PaymentStatus.Refund]: "İade edildi",
};
