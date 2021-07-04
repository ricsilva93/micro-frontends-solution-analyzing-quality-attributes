using Refit;
using store_catalog_service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace store_catalog_service.Gateways
{
    public class FakeStoreApiGateway : IFakeStoreApiGateway
    {
        private IFakeStoreApiClient _fakeStoreApiClient;
        private List<ProductsDto> _cache = new List<ProductsDto>();

        public FakeStoreApiGateway(IFakeStoreApiClient fakeStoreApiClient)
        {
            _fakeStoreApiClient = fakeStoreApiClient;
        }

        public async Task<IEnumerable<ProductsDto>> GetAsync()
        {
            try
            {
                if(_cache.Any()) return _cache;

                var result = await _fakeStoreApiClient.GetProducts();
                _cache.AddRange(result);
                return _cache;
                
            }
            catch (ApiException apiException)
            {
                Console.WriteLine(apiException.Message);
                return default;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return default;
            }
        }
    }
}
