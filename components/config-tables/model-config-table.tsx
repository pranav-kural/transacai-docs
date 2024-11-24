import { ConfigTable } from "./config-table";

export const ModelConfigTable = () => {
  const columns = [
    { key: "property", title: "Property" },
    { key: "accepted_values", title: "Accepted Values" },
    { key: "description", title: "Description" },
  ];
  const data = [
    {
      property: "name",
      accepted_values: "gpt4o, gemini15flash",
      av_as_code: "true",
      description:
        "Name of the LLM model to use for the chat agent. If not provided, the default model for the agent type will be used.",
    },
    {
      property: "version",
      accepted_values: "Depends on the model being used",
      description:
        "Version of the LLM model to use for the chat agent. If not provided, the latest version of the model will be used.",
    },
    {
      property: "temperature",
      accepted_values: "0.0 to 1.0",
      description:
        "Controls the randomness of the output. A higher value will result in more diverse responses.",
    },
    {
      property: "maxOutputTokens",
      accepted_values: "Depends on the model being used",
      description: "Maximum number of tokens to generate.",
    },
    {
      property: "stopSequences",
      accepted_values: "Array of strings",
      description: "Sequences to stop generation at.",
    },
    {
      property: "safetySettings",
      accepted_values: "Object",
      description: "Safety settings for the model.",
    },
    {
      property: "size",
      accepted_values: "1024x1024, 1792x1024, 1024x1792",
      av_as_code: "true",
      description: "Size of the output image. Supported only by DALL-E models.",
    },
    {
      property: "style",
      accepted_values: "vivid, natural",
      av_as_code: "true",
      description:
        "Style of the output image. Supported only by DALL-E models.",
    },
    {
      property: "quality",
      accepted_values: "preview, full",
      av_as_code: "true",
      description:
        "Quality of the output image. Supported only by DALL-E models.",
    },
    {
      property: "response_format",
      accepted_values: "b64_json, url",
      av_as_code: "true",
      description: "Format of the response. Supported only by DALL-E models.",
    },
  ];

  return <ConfigTable columns={columns} data={data} />;
};
