using store_cart_service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace store_cart_service.Database
{
    public interface IFakeDB
    {
        void Add(IEnumerable<ProductDto> products);

        IEnumerable<ProductDto> GetAll();

        void Update(IEnumerable<ProductDto> products);
    }
}
