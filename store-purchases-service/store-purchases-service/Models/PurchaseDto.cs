using System.Collections.Generic;

namespace store_purchases_service.Models
{
    public class PurchaseDto{
        public IEnumerable<ProductDto> Products { get; set; }

        public string PaymentMethod { get; set; }

        public double TotalPrice { get; set; }
    }
}
