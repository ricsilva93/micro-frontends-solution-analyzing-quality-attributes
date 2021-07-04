using Microsoft.AspNetCore.Mvc;
using store_cart_service.Models;
using store_cart_service.Services;

namespace store_cart_service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartService _cartService;

        public CartController(ICartService cartService)
        {
            _cartService = cartService;
        }

        // GET: api/Cart
        [HttpGet]
        public IActionResult Get()
        {
            var cart = _cartService.Get();

            return Ok(cart);
        }

        // POST: api/Cart
        [HttpPost]
        public void Post([FromBody] CartDto cart)
        {
            _cartService.Add(cart);
        }

        // PUT: api/Cart
        [HttpPut()]
        public void Put([FromBody] CartDto cart)
        {
            _cartService.Update(cart);
        }
    }
}
