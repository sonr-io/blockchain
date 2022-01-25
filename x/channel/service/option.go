package service

type PublishOption func(po *publishOptions)

type KeyValue struct {
	Key   string
	Value string
}

// AddMetadata adds metadata to the channel
func AddMetadata(kvs ...KeyValue) PublishOption {
	return func(po *publishOptions) {
		for _, kv := range kvs {
			po.metadata[kv.Key] = kv.Value
		}
	}
}

type publishOptions struct {
	metadata map[string]string
}
