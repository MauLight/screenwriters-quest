
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {

      currentUser: "Mau",

      //HOME:
      //Section 1:
      Home_Section1_Title1: "Are you ready for THE QUEST?",
      Home_Section1_Text1: "In THE QUEST you will learn a new way of writing and a new way of living. Shape a single idea into a powerful MYTH that links to your audience while shaping your own LIFE to become a professional writer.",
      Home_Section1_Text2: "Push yourself beyond the limits to become a professional writer by learning how to write in a completely different way. Build the myth of your story and use it as the seed from which every element, every decision your characters make will sprout. Achieve the most valued skill in all writing, unity.",
      Home_Section1_Text3: "But that’s not all because you will also learn how to overcome any fear, anxiety or frustration by achieving a growth mindset, which will become your ultimate weapon against anything that can stand on the way to your dreams.",

      //Section 2:
      Home_Section3_Text1: "In the Quest you'll learn to transform a simple idea into a complete feature screenplay.",
      Home_Section3_Text2: "You will learn to link your story to audiences by creating a myth around your idea.",
      Home_Section3_Text3: "You will learn to research your audience and create an attractive pitch to sell your project.",
      Home_Section3_Text4: "You will learn what it takes to be a writer and how to match these requirements.",
      Home_Section3_Text5: "You will gain confidence in speaking in public by pitching your ideas.",
      Home_Section3_Text6: "At the end of the quest, you will have a ready-made script and pitch presentation.",

      //Section 4:
      Home_Section4_Text1: "Watch the video lessons carefully designed to give you the concepts you need, consolidate you learning by reading texts, complete interactive activities and tests to earn points. Study the material at your own pace and return to the lessons to repeat the knowledge!",
      Home_Section4_Text2: "Participate in online meetings every Sunday lasting up to 2 hours to test your knowledge, resolve questions and perform practical exercises with other quest participants. Discuss your work, clear your doubts and get instant feedback!",
      Home_Section4_Text3: "Each week you’ll participate in special assignments according to the lesson plan, with the support of writing tools designed to incrementally help you write your best story. Download our mobile app to keep track your progress!",
      Home_Section4_Text4: "Practice writing and work on your story from the very first day. By constantly engaging with the craft, you will write a strong dramatic basis of your story, a logline, a synopsis, an outline, a completed first draft, as well as a pitch presentation.",
      Home_Section4_Text5: "Participate in additional educational modules for development as a person and a writer, such as our Growth mindset module. You can also take part in a reading and watching challenges to read 19 scripts and watch 19 movies.",

      //Lesson 01 - Dramatic Basis of Story  
      concept: "Idea or Concept",
      value: "Community Value",
      theme: "THEME",
      truth: "TRUTH",
      positive: "CONTRA-POSITIVE",
      lie: "LIE",
      flaw: "FLAW",
      want: "WANT",
      need: "NEED",
      rev: "SELF-REVELATION",
      antagonism: "ANTAGONISM",
      opposition: "OPPOSITION",
      half: "HALF-TRUTH",
      changed: "CHANGED-OBJECTIVE",
      battle: "BATTLE",
      death: "DEATH",
      tbattle: "",
      dramatic_basis: {
        concept_idea: {
          def: "In a general sense, what is the source of inspiration behind your need to write? Those images in your mind, sum them up into a phrase.",
          example: 'The eternal battle between good and evil in a galaxy far far away.'
        },
        community_value: {
          def: "How your point of view can solve a global, territorial, target group, etc. problem. Appealing to broader audiences.",
          example: "Social elements and life experiences shape our lives until we understand them."
        },
        myth: {
          def: "Discourse created by a series of symbols that recursively signify and become its own symbol system, a global symbol.",
          example: ""
        },
        theme: {
          def: "The symbolic argument between a posited truth and a lie. Generally speaking, theme is a uniform idea or subject, explored via recurring patterns and expanded through comparisons and contrast.",
          example: "War, the purpose of life, or even colliding statements as fear vs freedom can be powerful themes."
        },
        truth: {
          def: "It is the side of the theme that represents the revelation the character will have about the world because of facing the story. It's called the truth because it is actually an insight into what you, as an author, think about the theme.",
          example: "Even the smallest of persons can change the curse of the future."
        },
        contra_positive: {
          def: "The consequence of not following the truth. Conceptually, what would happen to the character if they don't achieve the truth, or what happens when they don't.",
          example: "Represing your emotions leads to losing yourself."
        },
        lie: {
          def: "The polar opposite to the truth statement, the lie is the worldview of the protagonist at the beginning of the story, and it builds tension against your truth, given by the distance that you create between the two statements.",
          example: "It is because you're important that you're destined to do something important."
        },
        flaw: {
          def: "The flaw of the protagonist is the primary reason for them being in their original state at the beginning of the story and this is because of the lie they believe. In some cases, you'll find that the flaw of the protagonist is anchored in what is called a wound/ghost dynamic.",
          example: "Unknowingly violent."
        },
        want: {
          def: "The representation of a larger, abstract desire, manifested as a concrete goal. Based in the lie, because the character wants something according to their flawed view on life.",
          example: "To survive by escaping the war."
        },
        need: {
          def: "The need of the protagonist is, in simple terms, to overcome a flaw inherent in their personality. You can think of a story as an ordeal that the protagonist needs to live through to fix this flawed trait that keeps them living in a lie-driven world.",
          example: "To understand that confidence is a leap of faith."
        },
        self_revelation: {
          def: "The self-revelation is the moment of change for the protagonist, and it's comprised of two distinctive parts; a psychological revelation or insight about who the protagonist truly is and a moral decision that becomes the final action of the protagonist.",
          example: ""
        },
        fall_into_lie: {
          def: "Sometimes, the power of the lie is too much for the protagonist to overcome it, in these cases, the final action is to commit to the lie because of being unable to move past it and change.",
          example: ""
        },
        antagonism: {
          def: "The setting for the conflict it is based in the protagonist's lie, manifested as the source of opposition to their want.",
          example: "A world in which being special means being better than the rest."
        },
        opposition: {
          def: "The unified forces working against the protagonist’s goal, rooted in antagonism and pushing against them.",
          example: "An enemy looking for the same goal, allies worried for your life and gatekeepers testing your resolve."
        },
        half_truth: {
          def: "Either because of a defeat or a victory, the protagonist manages to see what they're doing wrong for the first time in the story, the flaw in their personality.",
          example: "I've been blind to the transgressions against myself."
        },
        changed_objective: {
          def: "A narrower version of the goal focused by the understanding of the flaw and the antagonistic forces working against the protagonist.",
          example: "To do what it takes to protect the lives of the ones I love, even if it means going beyond the law."
        },
        battle: {
          def: "Incresingly desperate decisions pushing away from the flaw become major victories from the protagonist against the antagonistic forces.",
          example: "To uphold the law and what's right even at the face of losing everything."
        },
        death: {
          def: "A catastrophe and/or a major sacrifice pushes the protagonist to the edge, just before the last confrontation, a perspective about the price of victory.",
          example: "Letting go of everything that connects you with a past you want to let go."
        },
      },
      titles: ["Concept or Idea", "Community value", "Myth", "Theme", "Truth", "Contra-positive", "Lie", "Flaw", "Want", "Need", "Self-revelation", "Fall into Lie", "Antagonism", "Opposition", "Half-Truth", "Changed objective", "Battle", "Death"]

    },
    actions: {

      //Dramatic Basis of Story----------------------------------------------------------

      handleConcept: (concept) => {
        setStore({ concept: concept });
      },
      handleValue: (value) => {
        setStore({ value: value });
      },
      handleMyth: (myth) => {
        setStore({ myth: myth });
      },
      handleTheme: (theme) => {
        setStore({ theme: theme });
      },
      handleTruth: (truth) => {
        setStore({ truth: truth });
      },
      handlePositive: (positive) => {
        setStore({ positive: positive });
      },
      handleLie: (lie) => {
        setStore({ lie: lie });
      },
      handleFlaw: (flaw) => {
        setStore({ flaw: flaw });
      },
      handleWant: (want) => {
        setStore({ want: want });
      },
      handleNeed: (need) => {
        setStore({ need: need });
      },
      handleSelf: (rev) => {
        setStore({ rev: rev });
      },
      handleObjective: (obj) => {
        setStore({ obj: obj });
      },
      handleAntagonism: (antagonism) => {
        setStore({ antagonism: antagonism });
      },
      handleOpposition: (opposition) => {
        setStore({ opposition: opposition });
      },
      handleHalf: (half) => {
        setStore({ half: half });
      },
      handleChanged: (changed) => {
        setStore({ changed: changed });
      },
      handleBattle: (battle) => {
        setStore({ battle: battle });
      },
      handleDeath: (death) => {
        setStore({ death: death });
      },
      handleTheBattle: (tbattle) => {
        setStore({ tbattle: tbattle });
      },

      //Dramatic Basis of Story----------------------------------------------------------

      login: async (email, password) => {
        console.log(email);
        console.log(password);
        const store = getStore();
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            "http://127.0.0.1:5000/api/token",
            opts
          );
          if (resp.status !== 200) {
            alert("Incorrect email or password");
            return false;
          }

          const data = await resp.json();
          console.log(data);
          console.log(data.user_id);
          console.log("access_token: " + data.token);
          sessionStorage.setItem("token", data.token);
          setStore({ token: data.token, user_id: data.user_id });
          console.log(store.user_id);
          return true;
        } catch (error) {
          console.error("There was an error in your request");
        }
      },

      getMessage: async () => {
        const store = getStore();
        const opts = {
          headers: {
            Authorization: "Bearer " + store.token,
          },
        };

        fetch(
          "http://127.0.0.1:5000/api/hello",
          opts
        )
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },

      getUsers: async () => {
        const store = getStore();
        const url = `http://127.0.0.1:5000/api/users`;
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: "Bearer " + store.token,
          },
        }
        try {
          const response = await fetch(url, opts);
          const data = await response.json();
          console.log(data);
          setStore({ allUsers: data });
          console.log(store.allUsers);
        }
        catch (error) {
          console.log(error);
        }
      },

      getUserandScripts: async () => {
        const store = getStore();
        console.log(store.user_id);
        const url = `http://127.0.0.1:5000/api/user/${store.user_id}`;
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: "Bearer " + store.token,
          },
        }
        try {
          const response = await fetch(url, opts);
          const data = await response.json();
          console.log(data)
          setStore({ user: data })
          console.log(store.user);
          setStore({ userScripts: data.myscripts })
          setStore({ user_id: data.id })
        }
        catch (error) {
          console.log(error);
        }
      },

      getCredentials: async () => {
        const store = getStore();
        console.log(store.token);
        const opts = {
          headers: {
            Authorization: "Bearer " + store.token,
          },
        };

        fetch(
          "http://127.0.0.1:5000/api/user",
          opts
        )
          .then((resp) => resp.json())
          .then((data) => setStore({ credentials: data.user }))

          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
        console.log(store.credentials);
      },
    },
  };
};

export default getState;
