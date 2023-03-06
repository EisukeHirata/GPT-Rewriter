import Head from "next/head";
import { useState } from "react";
import ClipboardJS from "clipboard";

const Home = () => {
  const [formData, setFormData] = useState({
    userInputAudience: "",
    userInputFormality: "",
    userInputDomain: "",
    userInputVolume: "",
    userInputLanguage: "",
    userInputSimple: "",
    userInputCompelling: "",
    userInputText: "",
    userInputCondition: "",
  });
  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    console.log(
      `${formData.userInputAudience}${formData.userInputFormality}${formData.userInputDomain}`
    );
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userInputAudience: formData.userInputAudience,
        userInputFormality: formData.userInputFormality,
        userInputDomain: formData.userInputDomain,
        userInputVolume: formData.userInputVolume,
        userInputLanguage: formData.userInputLanguage,
        userInputSimple: formData.userInputSimple,
        userInputCompelling: formData.userInputCompelling,
        userInputCondition: formData.userInputCondition,
        userInputText: formData.userInputText,
      }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output);

    setApiOutput(`${output}`);
    setIsGenerating(false);
  };
  const onUserChangedText = (event) => {
    setUserInputText(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const userInputAudience = event.target.userInputAudience.value;
    const userInputFormality = event.target.userInputFormality.value;
    const userInputDomain = event.target.userInputDomain.value;
    const userInputVolume = event.target.userInputVolume.value;
    const userInputLanguage = event.target.userInputLanguage.value;
    const userInputSimple = event.target.userInputSimple.value;
    const userInputCompelling = event.target.userInputCompelling.value;
    const userInputText = event.target.userInputText.value;
    const userInputCondition = event.target.userInputCondition.value;

    const newFormData = {
      ...formData,
      userInputAudience,
      userInputFormality,
      userInputDomain,
      userInputVolume,
      userInputLanguage,
      userInputSimple,
      userInputCompelling,
      userInputText,
      userInputCondition,
    };

    setFormData(newFormData);

    callGenerateEndpoint();


    
  };

  return (
    <div className="root">
      <Head>
        <title>GPT Rewriter</title>
      </Head>
      <div className="container max-w-4xl mx-auto px-4">
        <div className="p-12">
          <div className="header">
          <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
    <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
    <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
</button>
            <div className="header-title">
              <h1>GPT Rewriter</h1>
            </div>
            <div className="header-subtitle">
              <h2>Rewrite your text as you like</h2>
            </div>
          </div>
          <div className="Input-output">
            <form onSubmit={onFormSubmit}>
              <div>
                <div className="option-box">
                  <p>Audience:</p>
                  <label>
                    <input
                      type="radio"
                      name="userInputAudience"
                      value="General"
                    />
                    General
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="userInputAudience"
                      value="Knowledgeable"
                    />
                    Knowledgeable
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="userInputAudience"
                      value="Expert"
                    />
                    Expert
                  </label>
                </div>
                <div className="option-box">
                  <p>Formality:</p>
                  <label>
                    <input
                      type="radio"
                      name="userInputFormality"
                      value="Informal"
                    />
                    Informal
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="userInputFormality"
                      value="Natural"
                    />
                    Natural
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="userInputFormality"
                      value="Formal"
                    />
                    Formal
                  </label>
                </div>
                <div className="option-box">
                  <p>Role:</p>
                  <label>
                    <input
                      type="radio"
                      name="userInputDomain"
                      value="General"
                    />
                    General
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="userInputDomain"
                      value="Startup"
                    />
                    Startup
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="userInputDomain"
                      value="Investor"
                    />
                    Investor
                  </label>
                </div>

                <div className="option-box">
                  <p>Volume:</p>
                  <label>
                    <input
                      type="radio"
                      name="userInputVolume"
                      value="General"
                    />
                    General
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="userInputVolume"
                      value="Twitter"
                    />
                    Twitter
                  </label>
                  <label>
                    <input type="radio" name="userInputVolume" value="Mail" />
                    Mail
                  </label>
                </div>
                <div className="option-box">
                  <p>Language:</p>
                  <label>
                    <input
                      type="radio"
                      name="userInputLanguage"
                      value="English"
                    />
                    English
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="userInputLanguage"
                      value="Japanese"
                    />
                    Japanese
                  </label>
                </div>
                <div className="option-box">
                  <p>Others:</p>
                  <label>
                    <input
                      type="checkbox"
                      name="userInputSimple"
                      value="Simple"
                    />
                    Simple
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="userInputCompelling"
                      value="Compelling"
                    />
                    Compelling
                  </label>
                </div>
              </div>

              <label>
                Additional conditions
                <textarea
                  name="userInputCondition"
                  className="prompt-box"
                ></textarea>
              </label>
              <label>
                Input Text:
                <textarea
                  name="userInputText"
                  className="prompt-box"
                ></textarea>
              </label>

              <button type="submit" className="generate-button ">
                Submit
              </button>
            </form>

            {apiOutput && (
              <div className="output">
                <div className="output-header-container">
                  <div className="output-header">
                    <h3>Output</h3>
                  </div>
                </div>
                <div className="output-content">
                  <p id="text-to-copy">{apiOutput}</p>
                </div>
              </div>
            )}
          </div>

          
          <div className="header">
            <div className="header-title">
              <h1 className="text-5xl">GPT Rewriter</h1>
            </div>
            <div className="header-subtitle">
              <p className="text-xl">Rewrite your text as you like</p>
            </div>
          </div>

          <div className="md:flex items-center my-4">
          <div className="mr-4 w-48">
          <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
            Audience:
          </h3>
          </div>
          <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="horizontal-list-radio-license"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Driver License{" "}
                </label>
              </div>
            </li>
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-id"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="horizontal-list-radio-id"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  State ID
                </label>
              </div>
            </li>
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-millitary"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="horizontal-list-radio-millitary"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  US Millitary
                </label>
              </div>
            </li>
            <li class="w-full dark:border-gray-600">
              <div class="flex items-center pl-3">
                <input
                  id="horizontal-list-radio-passport"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="horizontal-list-radio-passport"
                  class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  US Passport
                </label>
              </div>
            </li>
          </ul>
          </div>


          <div className="md:flex items-center my-4">
            <div className="mr-4 w-48">
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</h3>
          </div>
<ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="vue-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vue JS</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="react-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">React</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="angular-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Angular</label>
        </div>
    </li>
    <li class="w-full dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="laravel-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="laravel-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laravel</label>
        </div>
    </li>
</ul>
</div>



      
          <div className="mt-8">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="h-[320px] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>

          <div className="my-4">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
