using Microsoft.AspNetCore.Mvc;
using store_purchases_service.Models;
using store_purchases_service.Services;

namespace store_purchases_service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PurchasesController : ControllerBase
    {
        private readonly IPurchasesService _purchasesService;

        public PurchasesController(IPurchasesService purchasesService)
        {
            _purchasesService = purchasesService;
        }
        // GET: api/Purchases
        [HttpGet]
        public IActionResult Get()
        {
            var purchases = _purchasesService.Get();



            return Ok(purchases);
        }

        // POST: api/Purchases
        [HttpPost]
        public IActionResult Post([FromBody] PurchaseDto purchase)
        {
            _purchasesService.Add(purchase);

            return Created("", purchase);
        }
    }
}
