using store_purchases_service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace store_purchases_service.Database
{
    public interface IFakeDB
    {
        void Add(PurchaseDto purchases);

        IEnumerable<PurchaseDto> GetAll();
    }
}
