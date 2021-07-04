using Microsoft.AspNetCore.Mvc;
using store_catalog_service.Models;
using store_catalog_service.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace store_catalog_service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private IProductsService _productsService;

        public ProductsController(IProductsService productsService)
        {
            _productsService = productsService;
        }

        // GET: api/Catalog
        [HttpGet]
        public async Task<IEnumerable<ProductsDto>> GetAsync()
        {
            return await _productsService.GetAsync();
        }
    }
}
