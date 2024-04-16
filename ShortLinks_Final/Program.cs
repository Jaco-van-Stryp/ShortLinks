using Microsoft.EntityFrameworkCore;
using ShortLinks_Final.Data;
using ShortLinks_Final.Extentions;
using ShortLinks_Final.Interfaces;
using ShortLinks_Final.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSqlServer<DataContext>(builder.Configuration.GetConnectionString("DefaultConnectionString"));
builder.Services.AddScoped<ITokenService, TokenService>();
builder.Services.AddIdentityServices(builder.Configuration);
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();

app.UseHttpsRedirection();

app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://shortlinks.hubby.business"));

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers(); // Map API controllers
    endpoints.MapFallbackToFile("index.html"); // Fallback to Angular index.html for unknown routes
});

app.Run();
