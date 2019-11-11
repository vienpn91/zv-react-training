// GET STATE FROM REDUX
const getHackerNews = ({ hackernewroot }) => hackernewroot.dataHackerNew;

export const selectors = {
  getHackerNews,
}
const initialState = {
  dataHackerNew: [
    {
      by:"thcz",
      id:21310356,
      kids:[
          21310525,
          21310436,
          21310495
      ],
      parent:21310030,
      text:"I use Markdown documents in Git repositories whenever I can. Also try to evangelize for this at work. PRs then include relevant changes to both code and docs and it&#x27;s beautiful. For personal project docs I use this exclusively. At work it depends on the team, some people don&#x27;t like it, but most often it is because they don&#x27;t like keeping docs at all, not because of an alternative preference. I avoid UI and WYSIWYG based systems like Confluence like plague. I personally can&#x27;t stand them and every time I have to use one I do my hardest to pretend I&#x27;m writing Markdown in my head.<p>For personal agenda I use Apple Notes with basically just a huge list of things to do and events that are about to happen and I curate that list more or less non stop during the day. If something comes up and I&#x27;m with people and don&#x27;t want to be rude and spend too much time on the phone editing things to be in the right order and have all the relevant info captured with them, I just plop a line at the top of the note knowing I&#x27;ll groom it later.",
      time:1571647928,
      type:"comment"
    },
    {
      by:"alecigne",
      id:21316576,
      kids:[
          21317658
      ],
      parent:21310030,
      text:"I use Emacs Org mode in a git repository hosted on my Raspberry Pi. On my phone, I use Orgzly to edit the files, along with Termux to manage the git repo. I also use Termux to launch Emacs from time to time when I need an advanced operation not yet supported by Orgzly.<p>I keep sensitive files encrypted using GnuPG and my private key lives on a Nitrokey Pro (a GnuPG token).<p>I usually export to various formats with Org mode built-in exporters (mainly ascii, markdown, html and pdf) but I sometimes use Pandoc, especially to export to docx.<p>I have even started blogging with that system. I can edit an Org file on my phone using Orgzly or Emacs, and then use Termux to automatically 1. push the change to my Git repo 2. publish the files to html using Emacs in batch mode 3. send the html&#x2F;css files to my website using a bash script and sftp.<p>I don&#x27;t think I will ever look back :)",
      time:1571687867,
      type:"comment"
    }
  ],
}

export default function reducer(state = initialState, action) {
  switch(action.type) {   
    default: return state;
  }
}
