using store_cart_service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace store_cart_service.Database
{
    public class FakeDB : IFakeDB
    {
        private List<ProductDto> Database = new List<ProductDto>();

        public void Add(IEnumerable<ProductDto> products)
        {
            Database.AddRange(products);
        }

        public IEnumerable<ProductDto> GetAll()
        {
            return Database;
        }

        public void Update(IEnumerable<ProductDto> products)
        {
            Database.RemoveAll(elem => elem != null);
            Database.AddRange(products);

        }
    }
}
