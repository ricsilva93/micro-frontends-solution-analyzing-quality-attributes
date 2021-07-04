using store_purchases_service.Models;
using System.Collections.Generic;

namespace store_purchases_service.Services
{
    public interface IPurchasesService
    {
        void Add(PurchaseDto purchase);

        IEnumerable<PurchaseDto> Get();
    }
}
