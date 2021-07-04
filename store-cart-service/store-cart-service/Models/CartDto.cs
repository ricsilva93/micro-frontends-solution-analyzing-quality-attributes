using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace store_cart_service.Models
{
    public class CartDto
    {
        public IEnumerable<ProductDto> Products { get; set; }
    }
}
