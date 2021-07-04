using System.Collections.Generic;

namespace store_purchases_service.Models
{
    public class PurchaseHistoryDto{
        public IEnumerable<PurchaseDto> Purchases { get; set; }
    }
}
