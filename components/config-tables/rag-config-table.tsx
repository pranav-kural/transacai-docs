import { ConfigTable } from "./config-table";

export const RAGConfigTable = () => {
  const columns = [
    { key: "property", title: "Property" },
    { key: "accepted_values", title: "Accepted Values" },
    { key: "description", title: "Description" },
  ];
  const data = [
    {
      property: "topic",
      accepted_values: "String",
      description:
        "Topic for RAG chat agent. Required if RAG is enabled. Queries are restricted to be relevant to the given topic so to prevent unintended use.",
    },
    {
      property: "enableRAG",
      accepted_values: "Boolean",
      description:
        "Enable RAG (Retrieval Augmented Generation) functionality for this endpoint. Must provide either a retriever method or the retriever configurations if set to true.",
    },
    {
      property: "retriever",
      accepted_values: "Function",
      description:
        "Method to retrieve documents for RAG. Can be obtained from the `getDataRetriever` method.",
    },
    {
      property: "retrieverConfig",
      accepted_values: "Object",
      description:
        "Configuration for the RAG retriever, for example, number of documents to retrieve, algorithm to use, etc.",
    },
  ];

  return <ConfigTable columns={columns} data={data} />;
};
