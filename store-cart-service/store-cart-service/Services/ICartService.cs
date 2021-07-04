using store_cart_service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace store_cart_service.Services
{
    public interface ICartService
    {
        void Add(CartDto cart);

        void Update(CartDto cart);

        CartDto Get();
    }
}
