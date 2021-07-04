using store_catalog_service.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace store_catalog_service.Gateways
{
    public interface IFakeStoreApiGateway
    {
        Task<IEnumerable<ProductsDto>> GetAsync();
    }
}
