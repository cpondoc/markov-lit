// Initial Poem
const Shakespeare = "The little Love-god lying once asleep, \
Laid by his side his heart-inflaming brand, \
Whilst many nymphs that vowed chaste life to keep \
Came tripping by; but in her maiden hand \
The fairest votary took up that fire \
Which many legions of true hearts had warmed; \
And so the General of hot desire \
Was, sleeping, by a virgin hand disarmed. \
This brand she quenched in a cool well by, \
Which from Love's fire took heat perpetual, \
Growing a bath and healthful remedy, \
For men diseased; but I, my mistress' thrall, \
Came there for cure and this by that I prove, \
Love's fire heats water, water cools not love. \
To be, or not to be, that is the question: \
Whether 'tis nobler in the mind to suffer \
The slings and arrows of outrageous fortune, \
Or to take arms against a sea of troubles \
And by opposing end them. To die—to sleep, \
No more; and by a sleep to say we end \
The heart-ache and the thousand natural shocks \
That flesh is heir to: 'tis a consummation \
Devoutly to be wish'd. To die, to sleep; \
To sleep, perchance to dream—ay, there's the rub: \
For in that sleep of death what dreams may come, \
When we have shuffled off this mortal coil, \
Must give us pause—there's the respect \
That makes calamity of so long life. \
For who would bear the whips and scorns of time, \
Th'oppressor's wrong, the proud man's contumely, \
The pangs of dispriz'd love, the law's delay, \
The insolence of office, and the spurns \
That patient merit of th'unworthy takes, \
When he himself might his quietus make \
With a bare bodkin? Who would fardels bear, \
To grunt and sweat under a weary life, \
But that the dread of something after death, \
The undiscovere'd country, from whose bourn \
No traveller returns, puzzles the will, \
And makes us rather bear those ills we have \
Than fly to others that we know not of? \
Thus conscience does make cowards of us all, \
And thus the native hue of resolution \
Is sicklied o'er with the pale cast of thought, \
And enterprises of great pitch and moment \
With this regard their currents turn awry \
And lose the name of action. \
From fairest creatures we desire increase, \
That thereby beauty's rose might never die, \
But as the riper should by time decease, \
His tender heir might bear his memory: \
But thou, contracted to thine own bright eyes, \
Feed'st thy light'st flame with self-substantial fuel, \
Making a famine where abundance lies, \
Thyself thy foe, to thy sweet self too cruel. \
Thou that art now the world's fresh ornament \
And only herald to the gaudy spring, \
Within thine own bud buriest thy content \
And, tender churl, makest waste in niggarding. \
Pity the world, or else this glutton be, \
To eat the world's due, by the grave and thee. \
When forty winters shall beseige thy brow, \
And dig deep trenches in thy beauty's field, \
Thy youth's proud livery, so gazed on now, \
Will be a tatter'd weed, of small worth held: \
Then being ask'd where all thy beauty lies, \
Where all the treasure of thy lusty days, \
To say, within thine own deep-sunken eyes, \
Were an all-eating shame and thriftless praise. \
How much more praise deserved thy beauty's use, \
If thou couldst answer 'This fair child of mine \
Shall sum my count and make my old excuse,' \
Proving his beauty by succession thine! \
This were to be new made when thou art old, \
And see thy blood warm when thou feel'st it cold. \
Look in thy glass, and tell the face thou viewest \
Now is the time that face should form another; \
Whose fresh repair if now thou not renewest, \
Thou dost beguile the world, unbless some mother. \
For where is she so fair whose unear'd womb \
Disdains the tillage of thy husbandry? \
Or who is he so fond will be the tomb \
Of his self-love, to stop posterity? \
Thou art thy mother's glass, and she in thee \
Calls back the lovely April of her prime: \
So thou through windows of thine age shall see \
Despite of wrinkles this thy golden time. \
But if thou live, remember'd not to be, \
Die single, and thine image dies with thee.";

// Holds the initial poem
var poem = "";

// Using the RiTa.js library
var rita = require('rita');
var rm = new rita.RiMarkov(2);

// Setting up the loading in of text
rm.loadText(Shakespeare);

// Generating text
var text = rm.generateSentences(14);

// Creating the structured poem text
for (var i = 0; i < text.length; i++) {
    if (i === 0) {
        text[i] = "\"" + text[i];
    }
    if (i === text.length - 1) {
        text[i] = text[i] + "\""
    }
  poem += text[i] + "\n";
}

export {poem};