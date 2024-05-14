using VideoCollabServer.Dtos;
using VideoCollabServer.Dtos.Movie;

namespace VideoCollabServer.Interfaces;

public interface IMovieRepository
{
    Task<Result<CreatedMovieDto>> CreateMovieAsync(CreateMovieDto createMovieDto);
    Task DeleteMovieAsync(int movieId);

    Task<bool> ContainsMovieAsync(int movieId);
    
    
}