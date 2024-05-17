using System.Text.Json;
using System.Text.Json.Serialization;

namespace VideoCollabServer.Dtos;

public class JanusResponseDto
{
    [JsonPropertyName("janus")]
    public string? JanusAction { get; set; }
    public JsonElement? Data { get; set; }
    public JsonElement? Error { get; set; }
    
    public JsonElement? Plugindata { get; set; }

    
}