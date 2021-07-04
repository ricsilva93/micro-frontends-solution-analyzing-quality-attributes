using store_cart_service.Database;
using store_cart_service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace store_cart_service.Services
{
    public class CartService : ICartService
    {
        private readonly IFakeDB _fakeDB;

        public CartService(IFakeDB fakeDB)
        {
            _fakeDB = fakeDB;
        }

        public void Add(CartDto cart)
        {
            _fakeDB.Add(cart.Products);
        }

        public CartDto Get()
        {
            return new CartDto(){
                Products = _fakeDB.GetAll() 
            };
        }

        public void Update(CartDto cart)
        {
            _fakeDB.Update(cart.Products);
        }
    }
}
