using Microsoft.AspNetCore.Mvc;
using myApp.API.Models;
using myApp.API.Services;

namespace myApp.API.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class MovieController : ControllerBase
{
    public MovieController() {}

    [HttpGet]
    public ActionResult<List<Movie>> GetAll() => MovieService.GetAll();

    [HttpGet("{id}")]
    public ActionResult<Movie> Get(int id)
    {
        var movie = MovieService.GetOne(id);

        if (movie == null)
            return NotFound();
        
        return movie;
    }

    [HttpPost]
    public IActionResult Create(Movie movie)
    {
        MovieService.Add(movie);
        return CreatedAtAction(nameof(Get), new { id = movie.id}, movie);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Movie movie)
    {
        if(id != movie.id)
            return BadRequest();
        
        var existingMovie = MovieService.GetOne(id);
        
        if(existingMovie is null)
            return NotFound();
        
        MovieService.Update(movie);

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var movie = MovieService.GetOne(id);

        if(movie is null)
            return NotFound();
        
        MovieService.Delete(id);

        return NoContent();
    }
}