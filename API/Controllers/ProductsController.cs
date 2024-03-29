using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProductsController : BaseApiContoller
    {
        private readonly StoreContext _context;

        //dependency injection here
        public ProductsController(StoreContext context)
        {
            _context = context;
        }

        //now creating the endpoints
        [HttpGet]
        //in API controllers specifying the type of result. Inside ActionResult will return the list of products.
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        //id of specific product will be passed to the route parameter 
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null) return NotFound();

            return product;
        }
    }
}