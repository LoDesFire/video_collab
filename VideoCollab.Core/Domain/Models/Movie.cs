using System.ComponentModel.DataAnnotations;

namespace VideoCollab.Core.Domain.Models;

public class Movie
{
    public enum Statuses
    {
        ReadyToView,
        NotUploaded,
        InQueue,
        Transcoding,
        TranscodingError,
        StartTranscodingError
    }

    public int Id { get; set; }
    
    [MaxLength(256)]
    public string Name { get; set; } = null!;
    
    [MaxLength(4096)]
    public string? Description { get; set; }
    public Statuses Status { get; set; }
    public List<Link> Links { get; set; } = [];
    public List<User> UsersPinnedMovie { get; set; } = [];
}