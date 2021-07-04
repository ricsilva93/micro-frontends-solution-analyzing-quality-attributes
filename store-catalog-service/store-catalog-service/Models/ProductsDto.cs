namespace store_catalog_service.Models
{
    public class ProductsDto
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
