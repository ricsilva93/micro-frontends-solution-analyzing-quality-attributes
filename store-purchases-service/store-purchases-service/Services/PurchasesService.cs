using store_purchases_service.Database;
using store_purchases_service.Models;
using System.Collections.Generic;

namespace store_purchases_service.Services
{
    public class PurchasesService : IPurchasesService
    {
        private readonly IFakeDB _fakeDB;

        public PurchasesService(IFakeDB fakeDB)
        {
            _fakeDB = fakeDB;
        }

        public void Add(PurchaseDto purchase)
        {
            _fakeDB.Add(purchase);
        }

        public IEnumerable<PurchaseDto> Get()
        {
            return _fakeDB.GetAll();
        }
    }
}
