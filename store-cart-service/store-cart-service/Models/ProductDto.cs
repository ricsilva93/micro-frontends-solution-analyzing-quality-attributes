using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace store_cart_service.Models
{
    public class ProductDto
    {
        public int Id { get; set; }

        public string Category { get; set; }

        public string Description { get; set; }

        public string Image { get; set; }

        public double Price { get; set; }

        public string Title { get; set; }

        public int Amount { get; set; }
    }
}
