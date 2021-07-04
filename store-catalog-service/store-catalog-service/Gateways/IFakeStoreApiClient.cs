using Refit;
using store_catalog_service.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace store_catalog_service.Gateways
{
    public interface IFakeStoreApiClient
    {
        //https://fakestoreapi.com/products
        [Get("/products?limit=12")]
        Task<IEnumerable<ProductsDto>> GetProducts();
    }
}
