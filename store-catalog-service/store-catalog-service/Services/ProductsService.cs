using store_catalog_service.Gateways;
using store_catalog_service.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace store_catalog_service.Services
{
    public class ProductsService : IProductsService
    {
        private IFakeStoreApiGateway _fakeStoreApiGateway;

        public ProductsService(IFakeStoreApiGateway fakeStoreApiGateway)
        {
            _fakeStoreApiGateway = fakeStoreApiGateway;
        }

        public async Task<IEnumerable<ProductsDto>> GetAsync()
        {
            return await _fakeStoreApiGateway.GetAsync();
        }
    }
}
