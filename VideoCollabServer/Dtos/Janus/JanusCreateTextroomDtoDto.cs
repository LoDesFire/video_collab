using System.Text.Json.Serialization;

namespace VideoCollabServer.Dtos;

public record JanusCreateTextroomDtoDto: JanusTextroomDto
{
    [JsonPropertyName("admin_key")] 
    public string AdminKey { get; set; } = null!;
    [JsonPropertyName("owner_id")] 
    public string OwnerId { get; set; } = null!;
    public bool Private { get; set; } = true;
}