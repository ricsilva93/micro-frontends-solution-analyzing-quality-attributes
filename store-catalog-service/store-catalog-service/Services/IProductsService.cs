using store_catalog_service.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace store_catalog_service.Services
{
    public interface IProductsService
    {
        public Task<IEnumerable<ProductsDto>> GetAsync();
    }
}
