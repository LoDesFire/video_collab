using VideoCollabServer.Interfaces;

namespace VideoCollabServer.Repositories;

public static class DependencyInjection
{
    public static IServiceCollection AddRepositories(this IServiceCollection services)
    {
        return services
            .AddScoped<IFileRepository, FileRepository>()
            .AddScoped<ILinkRepository, LinkRepository>()
            .AddScoped<IMovieRepository, MovieRepository>()
            .AddScoped<IUserRepository, UserRepository>()
            .AddSingleton<ITranscodingMovieRepository, TranscodingMovieRepository>();
    }
}