using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Linq;

using myApp.API.Models;

namespace myApp.API.Services;

public class MovieService
{
    static List<Movie> Movies { get; }
    static int nextId = 10;
    static MovieService()
    {
        // Movies = new List<Movie>
        // {
        //     new Movie { Id = 1, Title = "inception", Description="Good Movei", ImageUrl = "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg", Genre="Action" },
        //     new Movie { Id = 2, Title = "Ocean 8", Description="casino", ImageUrl = "https://m.media-amazon.com/images/M/MV5BMjAyNDEyMzc4Ml5BMl5BanBnXkFtZTgwMjEzNjM0NTM@._V1_.jpg", Genre="Action" },
        //     new Movie { Id = 3, Title = "Forrest Gump", Description="gump gump", ImageUrl = "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg", Genre="deep" }
        // };
        var json = File.ReadAllText("./movieData.json");
        Movies = JsonConvert.DeserializeObject<List<Movie>>(json);
    }

    public static List<Movie> GetAll() => Movies;

    public static Movie? GetOne(int id) => Movies.FirstOrDefault(p => p.id == id);

    public static void Add(Movie movie)
    {
        movie.id = nextId++;
        Movies.Add(movie);
    }

    public static void Delete(int id)
    {
        var movie = GetOne(id);
        if(movie is null)
            return;

        Movies.Remove(movie);
    }

    public static void Update(Movie movie)
    {
        var index = Movies.FindIndex(p => p.id == movie.id);
        if(index == -1)
            return;
        
        Movies[index] = movie;
    }
}