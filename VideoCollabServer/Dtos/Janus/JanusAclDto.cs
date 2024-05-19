namespace VideoCollabServer.Dtos;

public record JanusAclDto: JanusTextroomDto
{
    public string Action { get; set; } = null!;

    public IEnumerable<string> Allowed { get; set; } = [];

}