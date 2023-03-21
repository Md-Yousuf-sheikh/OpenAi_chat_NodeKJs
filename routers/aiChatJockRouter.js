const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai')

const config = new Configuration({
  apiKey: '',
});

const openai = new OpenAIApi(config);

router.get('/:text', async (req, res) => {
  const text = req.params.text;
  const prompt = `
     ${text}. Return response in the following parsable JSON format:
        {
            "Q": "question",
            "A": "answer",
        }
    `

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 2048,
    temperature: 1,
  })

  const parsableJSONresponse = response.data.choices[0].text
  const parsedResponse = JSON.parse(parsableJSONresponse)

  res.json(parsedResponse);
});

module.exports = router;
