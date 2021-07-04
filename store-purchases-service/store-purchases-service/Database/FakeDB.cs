using store_purchases_service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace store_purchases_service.Database
{
    public class FakeDB : IFakeDB
    {
        private List<PurchaseDto> Database = new List<PurchaseDto>();

        public void Add(PurchaseDto purchases)
        {
            Database.Add(purchases);
        }

        public IEnumerable<PurchaseDto> GetAll()
        {
            return Database;
        }
    }
}
