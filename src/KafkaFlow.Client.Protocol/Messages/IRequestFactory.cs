namespace KafkaFlow.Client.Protocol.Messages
{
    using System.Collections.Generic;

    public interface IRequestFactory
    {
        IProduceRequest CreateProduce(ProduceAcks acks, int timeout);

        IMetadataRequest CreateMetadata();

        IOffsetFetchRequest CreateOffsetFetch(string groupId, string topicName, int[] partitions);

        IListOffsetsRequest CreateListOffset(string topicName, int[] partitions);
    }
}
