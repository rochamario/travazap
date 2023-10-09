async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

Avengers: Infinity War

[Marvel Opening Credits] [radio transmission sound]
Asgardian PA: This is the Asgardian refugee vessel Statesman. We are under assault, I repeat, we are under assault - The engines are dead, life support failing. Requesting aid from any vessel within range. We are 22 jump points out of Asgard. [the voice becomes more desperate and pleading] Our crew is made up of Asgardian families, we have very few soldiers here. This
is not a warcraft. I repeat, this is not a warcraft!

[Inside the ship, Ebony Maw walks among the bodies of dead Asgardians. Heimdall, badly wounded, reaches out as if he would stop Maw as he passes, but lacks the strength. Maw steps over them with no mind as he speaks, as if they were scattered pieces of dirty clothing on a bedroom floor.]
Ebony Maw: Hear me, and rejoice. You have had the privilege of being saved by the Great Titan... You may think this is suffering... No. it is salvation. Universal scales tip toward balance because of your sacrifice. Smile... [Corvus Glaive stabs one of the lingering Asgardians] For even in death, you have become Children of Thanos.
[Loki stands with the Black Order. He watches Thanos, shrouded in darkness and light, a vague silhouette.]
Thanos: [Looking out the large window we saw at the end of Thor: Ragnarok] I know what it's like to lose. To feel so desperately that you're right... yet to fail, nonetheless. [lifts Thor by the neck of his breastplate. Thor struggles feebly.] It's frightening. Turns the legs to jelly. I ask you, to what end?
Dread it. Run from it. Destiny arrives all the same. And now, it's here. Or should I say... I AM.
[Thanos holds up his hand to reveal the Infinity Gauntlet, which already hosts the violet Power Stone.]
 
Thor: [now being held by Thanos with one huge hand wrapping around his head; blood drools from his mouth] You talk too much. Thanos: [to Loki] The Tesseract, or your brother's head. I assume you have a preference.
[The Black Order heft their weapons or smirks, as appropriate]
Loki: Oh, I do. Kill away!
[Thanos' face expresses surprise briefly before presses the gauntlet to Thor's left temple. The Power Stone glows brightly. Thor screams hoarsely.]
Loki: [starts losing his cool demeanor almost immediately as Thor suffers, and breaks after only a few moments] ALL RIGHT, STOP!
Thor: We don't have the Tesseract. It was destroyed on Asgard. [Loki glances at Thor like he knows something he doesn't. He lifts his right hand into the air and the Tesseract reveals itself]
Thor: You really are the worst brother.
Loki: [While holding the Tesseract out to Thanos and advancing] I assure you, brother... the sun will shine on us again.
Thanos: Your optimism is misplaced, Asgardian.
Loki: Well, for one thing, I'm not Asgardian. And for another... We have a Hulk.
[Thanos looks to his right just as a green and very angry mass slams into him. Loki dives for Thor, pulling both of them out of the way as the Tesseract skitters across the floor, and the Hulk charges Thanos. The Hulk pummels Thanos, forcing him backwards and shoving him into the wall of the ship. Maw stops Cull Obsidian from interfering.]
Ebony Maw: Let him have his fun.
[Thanos pries the Hulk's hands away; an expression of surprise and fear crosses his green face. After several hard blows,
 
Thanos picks up the Hulk and slams him to the deck, defeated. Thor slams a metal bar across Thanos's back to no avail, is kicked across the deck by Thanos and is promptly bound in metal debris by Ebony Maw to keep him from interfering further.] Heimdall: [prays] Allfathers… let the dark magic flow through me one last... time.
[Heimdall summons the Bifrost, which carries the Hulk away; he meets Thor's eye.]
Thanos: That was a mistake.
[Thanos borrows Corvus's glaive and stabs Heimdall through the heart, twisting the blade in the wound.]
Thor: NO!!! [after Thanos kills Heimdall] You're going to die for that!
Ebony Maw: [shuts Thor's mouth with his telekinesis] Shhh. Ebony Maw: [kneels before Thanos, offering up the Tesseract] My humble personage… bows before your grandeur. No other being has ever had the might, nay the nobility, to wield not one, but
two Infinity Stones. The universe lies within your grasp. [Thanos crushes the Tesseract, revealing the blue Space Stone. He blows some of the fractals away, fingering the Stone between his thumb and index, before placing it on the gauntlet, and is momentarily rocked by the surge of energy that pulses as the stone seats in its setting.]
Thanos: There are two more Stones on Earth. Find them, my children, and bring them to me on Titan.
Proxima Midnight: [kneeling] Father, we will not fail you. Loki: [Emerging from behind the Black Order] [cheerfully] If I might interject… If you're going to Earth, you might want a guide. I do have a bit of experience in that arena.
Thanos: [unimpressed] If you consider failure experience. Loki: I consider experience, experience. Almighty Thanos, I... Loki... Prince of Asgard... [looks significantly at
 
Thor]Odinson... The rightful King of Jotunheim... God of Mischief... do hereby pledge to you, my undying fidelity. [Thor squints and notices a dagger materialize in Loki's hand. Loki braces himself, thrusts upward with lightning speed and attempts to stab Thanos, but is frozen in place by the Space Stone's power before the point could strike home.]
Thanos: "Undying." You should choose your words more carefully. [Thanos twists the dagger out of Loki's hand with his right hand, then takes hold of Loki's neck with the gauntlet and lifts him to eye level. Loki struggles, kicking, as his throat is squeezed. He makes eye contact with Thor before he increases his force on Loki's neck.]
Loki: [Giving up on fighting against Thanos] You will... never be... a god. [Thanos crushes Loki's neck, killing him]
Thanos: [walks over and drops Loki's body in front of Thor] No resurrections this time.
[Thanos raises the gauntlet, sends violet Power fire through the remains of the Statesman, and uses the Space Stone to teleport away with the Black Order.]
Thor: No… Loki…
[Thor is released from his bonds. He crawls over to Loki's body
-- which, unlike in The Dark World, has not returned to its Jotun form -- and lays his head down on Loki's chest, shedding tears for all that he has lost. The ship explodes.]
[The Bifrost continues its journey, bringing the Hulk across space to Earth.]
[Sanctum Sanctorum, New York City]
[Doctor Strange, Master of the Mystic Arts, proceeds down the main steps of the Sanctum with Wong.]
Doctor Strange: [dressed in casual American clothes] Seriously? You don't have any money?
 
Wong: [dressed as Wong is always dressed] Attachment to the material is detachment from the spiritual.
Doctor Strange: I'll tell the guys at the deli. [wryly] Maybe they'll make you a metaphysical ham on rye.
Wong: Oh, wait, wait, wait, I think I have 200.
Doctor Strange: Dollars?
Wong: Rupees.
Doctor Strange: Which is?
Wong: Uh, buck and a half.
Doctor Strange: What do you want?
Wong: I wouldn't say no to a tuna melt.
[Bruce crash-lands through the Sanctum stairs. The Cloak of Levitation swirls around Strange's shoulders immediately.] Bruce Banner: Thanos is coming. He's coming...
Doctor Strange: [Sharing a look with Wong, and now fully in his mage attire] Who?
[Title Screen: Avengers: Infinity War]
[Public Park, New York City, day. Tony Stark and Pepper Potts walk on having a conversation.]
Tony Stark: Slow down, slow down. I'm totally not kidding. Pepper Potts: [laughing slightly and talking over him] You're totally rambling.
Tony Stark: [also talking over her] No, I'm not.
Pepper Potts: Lost me.
Tony Stark: Look, you know how you're having a dream, and in the dream you gotta pee?
Pepper Potts: Yeah.
Tony Stark: Okay, and then you're like, "Oh my god, there's no bathroom, what am I gonna do?" "Oh! Someone's watching." "I'm gonna go in my pants."
Pepper Potts: Right. And then you wake up, and in real life you actually have to pee.
 
Tony Stark: Yes.
Pepper Potts: Yeah. Everybody has that.
Tony Stark: Right! That's the point I'm trying to make. Apropos of that, last night, I dreamt, we had a kid. So real. We named him after your eccentric uncle. Uh, what was his name?
Pepper Potts: [Nodding in understanding] Right.
Tony Stark: Morgan! Morgan.
Pepper Potts: So you woke up, and thought that we were...
Tony Stark: Expecting.
Pepper Potts: Yeah.
Tony Stark: [Becoming excited] Yes?
Pepper Potts: [Shaking her head] No.
Tony Stark: I had a dream about it. It was so real.
Pepper Potts: If you wanted to have a kid, you wouldn't have done that.
[Pepper unties his jacket sleeves and taps Tony's chest attachment]
Tony Stark: I'm glad you brought this up, 'cause it's nothing. It's just a housing unit for nano particles.
Pepper Potts: It's not helping your case, OK?
Tony Stark: No, no, it's an attachment, it's not a-
Pepper Potts: [insistently] You don't need that.
Tony Stark: I know. I had the surgery. I'm just trying to protect us. The future usses, and that's it. Just in case there's a monster in the closet, instead of, you know... Pepper Potts: Shirts?
Tony Stark: You know me so well. You finish all my sentences.
Pepper Potts: You should have shirts in your closet.
Tony Stark: Yeah. You know what there should be? No more surprises. We're gonna have a nice dinner tonight. Show off this Harry Win-stone. Right? And we should have no more surprises.
Ever. I should promise you.
 
Pepper Potts: Yes.
Tony Stark: I will. [Tony kisses Pepper.] [Doctor Strange comes through a portal.]
Doctor Strange: Tony Stark, I'm Doctor Stephen Strange. I need you to come with me. Oh, uh, congratulations on the wedding, by the way.
[Tony and Pepper are understandably shocked.]
Tony Stark: I'm sorry, you giving out tickets or something? Doctor Strange: We need your help. Look, it's not overselling to say that the fate of the universe is at stake.
Tony Stark: And who's "we"?
Bruce Banner: [emerges from behind Doctor Strange] Hey, Tony.
Tony Stark: [looking surprised] Bruce.
Bruce Banner: Pepper.
Pepper Potts: Hi.
Tony Stark: You okay?
[Bruce gives Tony a desperate hug, not answering. After everything he has been through, we understand.]
[Back at the Sanctum Sanctorum]
Wong: [Using magic to show the universe and five out of six Infinity Stones] From the dawn of the universe, there was nothing. Then, boom! The Big Bang sent six elemental crystals, hurtling across the virgin universe. These Infinity Stones each control an essential aspect of existence.
Doctor Strange: [Each Stone lights up as Strange names them.] Space. Reality. Power. Soul. Mind. And Time.
[Dr. Strange opens the Eye of Agamotto, revealing the Time Stone emitting emerald light.]
Tony Stark: [very attentive] Tell me his name again.
Bruce Banner: Thanos. He's a plague, Tony. He invades planets. He takes what he wants. He wipes out half the population. He sent Loki. The attack on New York. That's him.
 
Tony Stark: [Speaking to himself] This is it... What's our timeline?
Bruce Banner: No telling. He has the Power and Space Stones, that already makes him the strongest creature in the
whole universe. If he gets his hands, on all six Stones, Tony... Doctor Strange: He can destroy life on a scale hitherto undreamt of.
Tony Stark: [Leans against a cauldron, stretching like he's about to go for a run] Did you seriously just say "hitherto undreamt of"?
Doctor Strange: Are you seriously leaning on the Cauldron of the Cosmos?
Tony Stark: Is that what this is...?
[The Cloak of Levitation smacks Tony's arm, surprising him.] Tony Stark: [looking offended] [straightening himself] I'm going to allow that. If Thanos needs all six, why don't we just stick this one down the garbage disposal?
Doctor Strange: No can do.
Wong: We swore an oath to protect the Time Stone. With our lives.
Tony Stark: And I swore off dairy, but then, Ben & Jerry's named a flavor after me, so...
Doctor Strange: Stark Raving Hazelnuts.
Tony Stark: It's not bad.
Doctor Strange: A bit chalky.
Wong: "A Hunka-Hulka Burning Fudge" is our favorite.
Bruce Banner: That's a thing?
Tony Stark: Whatever. Point is: things change.
Doctor Strange: Our oath to protect the Time Stone cannot change. This Stone may be the best chance we have against Thanos.
 
Tony Stark: And still conversely, it may also be his best chance against us.
Doctor Strange: Well, if we don't do our jobs.
Tony Stark: [Slightly condescending] What is your job exactly, besides making balloon animals?
Doctor Strange: [Completely calm] Protecting your reality, douchebag.
[You seriously can't tell who's sarcasm is better.]
Bruce Banner: Okay, guys, could we table this discussion right now? The fact is that we have this Stone. We know where it is. Vision is out there somewhere with the Mind Stone, and we have to find him now.
Tony Stark: [awkwardly] Yeah, that's the... thing.
Bruce Banner: What do you mean?
Tony Stark: Two weeks ago, Vision turned off his transponder. He's offline.
Bruce Banner: What? Tony, you lost another super bot? Tony Stark: I didn't lose him. He's more than that. He's evolving.
Doctor Strange: Who could find Vision, then?
Tony Stark: [quietly to himself] Shit. [to the other men in a normal tone] Probably Steve Rogers.
Doctor Strange: [sighing in exasperation] Oh, great.
Tony Stark: Maybe. But... [sighs]
Bruce Banner: [missing the events of the Avengers' Civil War] Call him.
Tony Stark: It's not that easy. God, we haven't caught up in a spell, have we?
Bruce Banner: No.
Tony Stark: The Avengers broke up. We're toast.
Bruce Banner: [Rather surprised and slightly let-down] Broke up? Like a band? Like The Beatles?
 
Tony Stark: Cap and I fell out hard. We're not on speaking terms.
Bruce Banner: [Almost pleading] Tony, listen to me. Thor's gone. Thanos is coming. It doesn't matter who you're talking to or not.
[Tony hesitates, before pulling out the cellular phone Steve mailed him, muttering 'flip phone'. It seems as though he brings it everywhere, always ready to call his lost friend. Before clicking "Call", he pauses, distracted by an unusual rumbling.] Tony Stark: Say, Doc, you wouldn't happen to be moving your hair, would you?
Doctor Strange: [Looking up at his forelock fluttering] Not at the moment, no.
[Tony looks at the Hulk-made opening through the ceiling and sees debris flying by outside. He exits the Sanctum through the front door and scans the chaotic surroundings, the camera shaking around in this following long take to illustrate the chaos -- people running and screaming in alarm, traffic becoming impossibly tangled, a litter-filled wind like a nor'easter's. A woman falls nearly at his feet and he helps her up.]
Tony Stark: You okay?
[The woman ignores him and runs away. A car crashes in on a pole behind Tony.]
Tony Stark: Help him! Wong, Doc.
Bruce Banner: Go! Got it!
Tony Stark: [Putting on his sunglasses] F.R.I.D.A.Y., what am I looking at?
F.R.I.D.A.Y.: Not sure, I'm working on it.
Tony Stark: Hey! You might wanna put that Time Stone in your back pocket, Doc!
Doctor Strange: [Bands of spells are readied around his forearms] Might wanna use it.
 
[A mechanical hum grows louder as Tony approaches the intersection. As he turns the corner, he sees a huge circular ship floating over Bleecker Street.]
[On a schoolbus, the hairs on Peter Parker's arms stand up. He looks out the window and sees the ship.]
Peter Parker: [Tapping his best friend in the seat in front of him] Ned, hey. I need you to cause a distraction.
Ned Leeds: [Turns around and sees the spaceship] Holy shit! We're all gonna die! There's a spaceship!
[Students scramble to the windows in the back to see the spaceship.]
[Peter quickly slides on one of his Stark-made webshooters, and webs the emergency exit lever on the opposite side of the bus.] Your Bus Driver, Stan Lee: What's the matter with you kids?
You've never seen a spaceship before?
[Peter jumps out the window, clinging to the side of the bus and pulling on his mask before leaping over the side of the bridge, shooting a webline and swinging free. He makes his way hastily towards the ship.]
Tony Stark: F.R.I.D.A.Y., evac anyone south of 43rd Street, notify first responders.
F.R.I.D.A.Y.: Will do.
[Doctor Strange throws the Winds of Watoomb over Bleeker Street, and winks at Tony. The dust clears. Tony is begrudgingly amused for a split second.]
[Then Ebony Maw and Cull Obsidian exit the ship by transmat.] Ebony Maw: Hear me, and rejoice. You are about to die at the hands of the Children of Thanos. Be thankful, that your meaningless lives are now contributing to...
Tony Stark: [Echoing the familiarly defiant 2008 Tony Stark] I'm sorry, Earth is closed today. You better pack it up and get outta here.
 
Ebony Maw: [Looks at Strange] Stonekeeper... [Gestures to Tony] Does this chattering animal speak for you?
Doctor Strange: Certainly not. I speak for myself. [Magical shields are readied with his fists, stepping forward.] But you’re trespassing in this city and on this planet. [Wong emulates him.]
Tony Stark: It means get lost, Squidward!
Ebony Maw: He exhausts me.
Cull Obsidian: [Two untranslated syllables]
Ebony Maw: Bring me the Stone.
Cull Obsidian: [Three untranslated syllables] [He drops his huge alien hammer and drags it along as he obeys his brethren.]
Tony Stark: Banner, you want a piece?
Bruce Banner: No, not really, but when do I ever get what I want?
Tony Stark: That's right.
[Bruce attempts to release the Hulk. Instead of Hulk coming out easily, the most that turns green is Bruce's neck]
Tony Stark: Been a while. Good to have you, buddy. Bruce Banner: I just... I need to concentrate here for one second. Come on, come on, man.
Tony Stark: Where's your guy?
Bruce Banner: I don't know. We've sort been havin' a thing.
Tony Stark: There's no time for a thing.
Bruce Banner: I know.
Tony Stark: [points at the approaching Obsidian] That's the thing right there. Let's go.
[Bruce gives out a loud grunt, but fails to release the Hulk. Strange stares at Tony and Bruce in disbelief.]
Tony Stark: [glances at Strange] Dude, you're embarrassing me in front of the wizards.
 
Bruce Banner: Tony, I'm sorry. [stammers] Either I can't or he won't-
Tony Stark: It's okay. Hey, stand down. [to Wong] Keep an eye on him. Thank you.
Wong: I have him.
Bruce Banner: Damn it.
[As Cull Obsidian approaches the team, Stark dons his nanotech Iron Man suit in the space of three steps. He grows a shield on one arm to protect himself, then grows a set of blasters that easily throw the Dwarf back to Maw, who gestures and deflects his massive companion into some cars.]
Bruce Banner: Where'd that come from?
Tony Stark: It's nano-tech. You like it? A little somet-
[Ebony Maw creates a spike of earth that throws Tony far up, and attacks the rest of the team with uprooted trees and other debris. Wong summons the Shield of the Seraphim.]
Doctor Strange: Dr. Banner, if the rest of your green friend won't be joining us...
[Doctor Strange teleports Bruce to a nearby park along with half a taxi. Tony returns and joins the fight, pushing a car thrown by Maw back at him. Maw cuts it in half and lets the pieces fly past him, untouched.]
Tony Stark: Gotta get that stone outta here, now.
Doctor Strange: It stays with me.
Tony Stark: Exactly. Bye.
[Tony flies through Ebony Maw's obstacle course but is cut short by Cull Obsidian's hammer, sending him through a building and into the park at high speed, plowing into the ground and fetching up against a tree.]
Bruce Banner: [Rushing over to Tony] Tony, you okay? How we doing? Good? bad?
 
Tony Stark: Really, really good. Really good. Do you plan on helping out?
Bruce Banner: I'm trying. He won't come out.
[Cull Obsidian arrives at the park and throws his hammer at Bruce and Tony.]
Tony Stark: Hammer. [Pushes Bruce out of the way]
[Tony's energy beam deflects off Cull Obsidian's shield, slicing down trees. Bruce barely evades one.]
Bruce Banner: [Crawling out from under the branches. Desperate and confused] Come on, Hulk. What are you doing to me? [starts slapping himself multiple times] Come out! Come out! Come out! Hulk: [Half of Bruce's face becomes the Hulk.] Nooooooo! [Bruce falls back exhausted into his tree]
Bruce Banner: What do you mean, "no"?!
[Tony is knocked down by Obsidian, who is about to deliver a decisive blow, but the alien's hammer is easily caught by Spider-Man.]
Peter Parker: Hey, man. What's up, Mr. Stark?
Tony Stark: Kid, where'd you come from?
Peter Parker: Field trip to MoMA.
[Cull Obsidian grabs Peter and throws him away.]
Peter Parker: What is this guy's problem, Mr. Stark?
Tony Stark: He's from space. He came here to steal a necklace from a wizard.
[Wong and Doctor Strange fight Maw. Maw lifts several bricks from the ground and turns them into sharp points. He sends them towards Wong and Strange. The two make portals and boomerang them back towards Maw. Maw moves a car to protect himself, but one spike still hits his head, creating a cut. Angered, Maw uses a broken fire hydrant's water stream to knock Wong back several meters, rendering him unconscious.]
 
[Strange snaps a whip of magical energy to bind Maw's hands and yanks, but Maw flies forward with the pull and pins Strange upside-down against a building, using the bricks to trap the Sorceror Supreme.]
Ebony Maw: Your powers are quaint. You must be popular with children.
[Maw tries to grab the amulet holding the Time Stone but jerks back when it burns his hand.]
Doctor Strange: It's a simple spell but quite unbreakable. Ebony Maw: [Vehemently.] Then I'll take it off your corpse. [Maw pulls Strange away from the building and throws him to the ground. Strange starts the gestures to use the Eye of Agamotto, but utility cables first pin Strange's arms, interrupting the spell and closing the Eye, while another cable winds around his torso, then tightens around his throat.]
Doctor Strange: You'll find... removing a dead man's spell... troublesome.
Ebony Maw: You'll only wish you were dead. [Strange falls unconscious and to the ground; Maw raises a portion of street pavement to use as a carrier, but the Cloak of Levitation works its master loose of the cable spiral and flies Strange away] NO! Tony Stark: [Still fighting Cull Obsidian, as Strange passes through the park] Kid, that's the wizard. Get on it.
Peter Parker: On it!
[Peter Parker chases Ebony Maw, floating speedily and upright on a small platform of burbling debris leaving a deep rut in the streets, who in turn chases the Cloak-driven Strange through Manhattan; Maw attacks him, throwing a Rocket Mortgage billboard at Spider-Man to be rid of him.]
Peter Parker: [untangles himself] Not cool!
[Maw bends all the utility poles in the path of the fleeing Cloak, finally snagging the loyal garment and ripping it loose
 
of its master. Spider-Man scoops up Strange before he hits the pavement, but before he can get away with the unconscious Strange, a cone of blue light starts pulling the mage inexorably upwards. Spider-Man grabs a lightpole to anchor himself, but Maw uproots it, sending Strange, Cloak and teenager on their way to his ship.]
Peter Parker: Uhh, Mr. Stark? I'm being beamed up!
Tony Stark: Hang on, kid. [Cull Obsidian's hammer doubles as a claw, pinning Tony to the ground and shorting his suit. As Obsidian jumps towards Tony, blades ready to end this fight, he is sent through a portal instead. The alien turns and leaps to return the same way, but Wong closes it rapidly -- only Obsidian's severed hand makes it back to the park. Bruce kicks the hand away with a noise of disgust.]
[Tony shakes himself free of the Dwarf's weapon, now powerless] Wong, you're invited to my wedding. [Tony begins to fly towards the large ship] Give me a little juice,
F.R.I.D.A.Y. [Tony's foot thrusters morph together into a single larger jet and increase his speed considerably]
[Ebony Maw walks towards the controls of the ship, Strange's unconscious body floating face-down behind him, and prepares to leave Earth's atmosphere.]
Tony Stark: [still in pursuit of the ship and his
protégé.] Unlock 17-A. [A pod launches from the upstate Avengers headquarters and curves up to the accelerating circular
ship] Pete, you gotta let go. I'm gonna catch you.
Peter Parker: But you said save the wizard! [Peter, gasping from lack of oxygen, pulls off his mask] I can't breathe!
Tony Stark: You're too high up. You're running out of air.
Peter Parker: Yeah! That makes sense.
[Peter passes out, free-falling, but not for long before the pod reaches him. It attaches itself to him, becoming the Iron Spider
 
suit. Now being able to breathe, Peter lands on a bottom part of the ship, standing up heroically.]
Peter Parker: Mr. Stark, it smells like a new car in here! Tony Stark: Happy trails, kid. F.R.I.D.A.Y, send him home. F.R.I.D.A.Y: Yep.
[A large parachute extends from the new suit, snatching Spider- Man free of the ship's hull and him spiraling back to Earth.] Peter Parker: OH, COME ON!
[Tony latches onto the hull and cuts a hole to board the ship, looking for wherever Strange and Ebony Maw went.]
F.R.I.D.A.Y: Boss, incoming call from Miss Potts.
Pepper Potts: [Sounding heavily worried.] Tony? Oh, my God. Are you all right? What's going on?
Tony Stark: Yeah, I'm fine. I just think we might have to push
our 8:30 res.
Pepper Potts: Why?
Tony Stark: [While looking at the ship around him] Just 'cause I'll... probably not make it back for a while.
Pepper Potts: Tell me you're not on that ship.
Tony Stark: Yeah.
Pepper Potts: God, no. Please tell me you're not on that ship. Tony Stark: Honey, I'm sorry. I'm sorry, I don't know what to say.
Pepper Potts: Come back here, Tony. I swear to God…
Tony Stark: Pep…
Pepper Potts: Come back here right now! Come back!
F.R.I.D.A.Y: Boss, we're losing her. I'm going, too…
[Peter Parker is revealed to have managed to shoot a web to the outside of the ship, foiling his parachute, and clambers inside a slowly-closing chamber.]
Peter Parker: Oh my God! [looks at the rapidly-receding planet behind him] I should have stayed on the bus...
 
[Ebony Maw, hands engaged in the ship's steering mechanism, accelerates into hyperspace.]
(Meanwhile, back in New York)
[Bruce finds Tony's flip-phone in the debris on the street and picks it up thoughtfully. Wong opens up a portal back to the Sanctum.]
Bruce Banner: Where you going?
Wong: The Time Stone's been taken. The Sanctum remains unguarded. What will you do?
Bruce Banner: [Holding Rogers' cell phone] I'm gonna make a call.
[Wong nods in understanding and closes the portal, not to be seen again for the rest of the movie. Banner holds Steve Rogers' cell phone and makes a call.]
[Screen title: SPACE]
[Camera pans around a brightly coloured planet with ice rings to the Benatar. The Guardians of the Galaxy are travelling to investigate a distress call to the tune of "Rubberband Man".] Peter Quill: [chair-dancing to the song] Sing it, Drax!
[Drax is snoring with his mouth open from his seat in front of Quill.Gamora lip-synchs with the song along with Quill.] Rocket: [yawns] Why are we doing this again?
Gamora: [annoyed] It's a distress signal, Rocket. Someone could be dying.
Rocket: I get that, but why are we doing it?
Peter Quill: 'Cause we're nice. And maybe whoever it is will give us a little cheddar cheese for our help.
Gamora: [waves her index finger at Quill] Which isn't the point. Peter Quill: [points back at Gamora] Which isn't the point... I mean… If he doesn't pony up…
Drax: We'll take his ship.
Rocket: Exactly!
 
Peter Quill: B-b-b-bingo!
[Gamora looks up at Quill in concern. Quill returns her look and grimaces a "don't worry about it" expression at her]
Mantis: [reading her console] We are arriving.
Peter Quill: All right, Guardians. Don't forget, this might be dangerous, so let's put on our mean faces. [Groot rolls his eyes as Mantis makes a snarl. Groot's handheld Terran-vintage video game beeps.] Groot, put that thing away. Now. I don't wanna tell you again. [Game continues beeping] Groot.
Groot: [in a mocking tone] I am Groot!
Peter Quill: Whoa! Rocket: Language! Gamora: Hey!
Drax: Wow.
Peter Quill: You got some acorns on you, kid.
Rocket: Ever since you got a little sap, you're a total d-hole. Keep it up, and I'm gonna smash that thing to pieces!
[Groot rolls his eyes.]
[The Benatar decelerates, and Thanos's devastation suddenly covers the Guardians' field of view, revealing the distress signal to be the one from the Asgardian vessel at the beginning of the movie. Bodies are seen floating dead in space along with the pieces of the shredded ship.]
Mantis: What happened?
Rocket: Looks like we're not getting paid.
[With a thump, Thor's body is plastered to the hull of the ship.]
Rocket: (Waving his hands) Wipers! Wipers! Get it off!
[Thor’s eye opens; all gasp]
[Cut to the Guardians settling the still-unconscious Thor onto an examination table]
Peter Quill: How the hell is this dude still alive?
 
Drax: [Sounding awed.] He is not a dude. You're a dude. This... This is a man. A handsome, muscular man.
Peter Quill: [A little dented.] I'm muscular.
Rocket: Who are you kidding, Quill? You're one sandwich away from fat.
Peter Quill: Yeah, right.
Drax: It's true. You have gained a little weight… [Drax motions to his chin and belly]
[Gamora leaves Quill's side at Thor's right, and circles around the foot of the table]
Peter Quill: What? Gamora, do you think I'm…
Mantis: He is anxious. Angry. He feels tremendous loss and guilt.
Drax: It's like a pirate had a baby with an angel.
Peter Quill: Wow. This is a real wake-up call for me. Okay. I'm gonna get a Bowflex. I'm gonna commit. I'm gonna get some dumbbells.
Rocket: You know you can't eat dumbbells, right?
Gamora: [reaches Drax's side and picks up Thor's left arm, stroking his triceps] It's like his muscles are made of Cotati metal fibers.
Peter Quill: [snidely to Gamora] Stop massaging his
muscles. [Gamora, annoyed, drops the arm with a thump; quietly to Mantis] Wake him up.
Mantis: [Places hand on Thor's forehead.] Wake.
[Thor awakens, sitting up violently and throwing himself off the table to stumble a few steps away, then turning to see his hosts all pointing their weapons of choice at him; Groot is still playing his game.]
Thor: Who the hell are you guys?
[Cut to later as the Guardians stand around Thor eating soup.]
 
Gamora: The entire time I knew Thanos, he only ever had one goal: To bring balance to the Universe by wiping out half of all life. He used to kill people planet by planet, massacre by massacre...
Drax: Including my own.
Gamora: If he gets all six Infinity Stones, he can do it with the snap of his fingers, like this. [she snaps her fingers] Thor: You seem to know a great deal about Thanos.
Drax: Gamora... is the daughter of Thanos.
Thor: Your father killed my brother. [Thor stands and strides towards Gamora aggressively.]
Peter Quill: Oh, boy. Stepfather. Technically, she hates him as much as you do. [Thor softens a bit.]
Thor: Families can be tough. [he claps a hand on Gamora's
shoulder] Before my father died, he told me I had a half- sister...that he imprisoned in Hel. Then she returned home, and stabbed me in the eye, so... I had to kill her. It's life, isn't it, I guess. Goes round and round and... I feel your pain. [Peter glares at Thor's hand on Gamora's shoulder, on the verge of full snarl, and moves around her to push between her and Thor]
Peter Quill: And I feel your pain, as well. I mean it's not a competition, but I've been through a lot. My father killed my mother, then I had to kill my father. And that was hard.
Probably even harder than having to kill a sister. Plus, I, came out of it with both of my eyes-"
Thor: [not paying attention as he stares at his soup spoon] I need a hammer, not a spoon… (he attempts to fiddle with machinery) How do I open this thing? Is there some sort of a four-digit code maybe… Maybe a birth date or something…
Peter Quill: What are you doing?
Thor: Taking your pod.
 
Peter Quill: [deepens his voice] No, you're not! [mimics Thor’s accent] You'll not, be taking our pod today, sir.
Rocket: Quill. Are you making your voice deeper?
Peter Quill: No.
Drax: You are. You're imitating the god-man. It's weird.
Peter Quill: No I'm not.
Mantis: (gasp) He just did it again!
Peter Quill: This is my voice!
Thor: [steps closer to Quill.] Are you mocking me?
Peter Quill: Are you mocking me? Thor: Stop it. You did it again. Peter Quill: He's trying to copy me.
Thor: Would you stop doing that? He's doing it first.
Gamora: Enough! We need to stop Thanos. Which means we need to find out where he's going next.
Thor: Knowhere.
Mantis: He must be going somewhere.
Peter Quill: No. Knowhere? It's a place. We've been there. It sucks. Excuse me, that's our food. [To Thor as he rummages through their food stores]
Thor: Not anymore.
Gamora: Thor… Why would he go to Knowhere?
Thor: Because for years, the Reality Stone has been safely stored, there with a man we call the Collector.
Peter Quill: If it's with the Collector, then it's not safe. Only an idiot would give that man a stone.
Thor: Or a genius.
Gamora: [to Thor] How do you know he's not going for one of the other Stones?
Thor: There's six stones out there. [finishes rummaging and steps in front of Gamora] Thanos already has the Power Stone because he stole it last week, when he decimated Xandar. He
 
stole the Space Stone from me when he destroyed my ship and slaughtered half my people. The Time and Mind Stones are safe on Earth. They're with the Avengers.
Peter Quill: The Avengers?
Thor: [by way of explanation.] They're Earth's Mightiest Heroes.
Mantis: Like Kevin Bacon?
Thor: [pause] He may be on the team. I don't know. Haven't been there in a while. As for the Soul Stone, well, no one's ever seen that. No one even knows where it is. Therefore, Thanos can't get it. Therefore, he's going to Knowhere. Hence, he'll be getting the Reality Stone. You're welcome.
Gamora: Then we have to go to Knowhere now. Thor: Wrong! Where we have to go, is Nivadellir. Drax: That's a made up word.
Thor: All words are made up.
[It's official: mind blown.]
Rocket: Hold up, Nidavellir is real? [climbing on to the
table] Seriously? I mean, that place is a legend. [increasingly gleeful] They make the most powerful, horrific weapons to ever torment the Universe. I would very much like to go there, please.
Thor: The rabbit is correct, and clearly the smartest among you.
Rocket: Rabbit?
Thor: Only Eitri the dwarf king can make me the weapon I need. [to Rocket] I assume you're the captain, sir?
Rocket: You're very perceptive.
Thor: You seem like a noble leader. Will you join me on my quest to Nidavellir?
Rocket: Lemme just ask the captain. Oh, wait a second, it's me! Yeah, I'll go.
Thor: Wonderful.
Peter Quill: Except for that I'm the captain.
 
Thor: Quiet!
Peter Quill: That's my backpack.
Rocket: Go sit down.
Peter Quill: [to Thor] Look, this is my ship. And I'm not goin' to… [gropes for "Nidavellir"] Wait, what kind of weapon are we talking about here?
Thor: The Thanos killing kind.
Peter Quill: Don't you think that we should all have a weapon like that?
Thor: No. You simply lack the strength to wield them. Your bodies will crumble as your minds collapse into the madness. Rocket: Is it weird that I wanna do it even more now?
Thor: A little bit. Yeah.
Gamora: If we don't go to Knowhere and Thanos retrieves another stone, he'll be too powerful to stop.
Thor: He already is.
Rocket: I got it figured out. We got two ships, and a large assortment of morons. So me and Groot will go with the pirate- angel here, and the morons will go to Knowhere to try and stop Thanos. Cool? Cool.
Thor: So cool. [Smiles a big grin.]
Peter Quill: [to Rocket] For the record… I know that you're only going with him because it's where Thanos isn't.
Rocket: You know, Quill, you shouldn't talk that way to
your captain, Quill. [As he enters the pod] Come on, Groot. Put that game down, you'll rot your brain.
Thor: I bid you farewell and good luck, morons. Bye.
[The Guardians nod or wave farewell as Thor, Rocket and Groot depart. Cut to Scotland, where Vision and Wanda Maximoff are sharing a room. Wanda is in bed while Vision, in a human glamour, watches out a window.]
[high-pitched trilling]
 
Vision: [gasps and holds his hand to the Mind Stone in pain]
Wanda Maximoff: Vis? Is it the stone again?
Vision: It's as if it's speaking to me.
Wanda Maximoff: What does it say?
Vision: I don't... I don't know. But something...
[The stone trills again and Vision flinches. Wanda takes his face in her hands. Vision turns his head so he can kiss her left palm, then presses Wanda's hand to the Mind Stone.]
Vision: Tell me what you feel.
[Wanda gestures, her hand emanating her red swirling energy. She seems confused.]
Wanda Maximoff: I just feel you.
[They kiss. Cut to later, where the two are going on a stroll.]
Wanda Maximoff: So there's a 10 AM to Glasgow to give us more time together before you went back.
Vision: What if I miss that train?
Wanda Maximoff: There is an 11.
Vision: What if I missed all the trains? What if this time, I didn't go back?
Wanda Maximoff: You gave Stark your word.
Vision: I'd rather give it to you.
Wanda Maximoff: There are people who are expecting me too, you know. We both made promises.
Vision: Not to each other. [he puts his hands on her shoulders] Wanda… For two years, we've stolen these moments, trying to see if this could work. And... I don't
know. [stammers] You know what, I'm just gonna speak for myself.
- I, I... I think... Wanda Maximoff: It works. Vision: It works.
Vision: Then stay. Stay with me.
 
[Wanda looks down, but then her eyes and attention drift to her left.]
Vision: [suddenly very uncertain] Or not. If I'm overstepping… [Wanda steps over to a better view of the TV in the kebab shop at which they had stopped, drawing Vision with her. It shows coverage of the invasion of New York, the alien antagonists, and the disappearance of Tony Stark.]
Wanda Maximoff: [fearful] What are they?
Vision: What the stone was warning me about. [he kisses her hand] I have to go.
Wanda Maximoff: No, Vision. Vision, if that's true… Then maybe going isn't the best idea.
Vision: Wanda, I… [Corvus Glaive appears suddenly behind Vision, stabbing him through the back. Vision screams, loses his glamour to return to his green, red and gold appearance, and is thrown down into the street.]
Wanda Maximoff: Vision! [she circles her hands, gathering up energy for a counterattack when Proxima Midnight blasts her from behind, knocking Wanda across the street and through a bistro's window.]
[Corvus Glaive pins Vision down and digs the point of his high- tech glaive into Vision's forehead in an attempt to extract the Mind Stone.]
[Wanda commits her own surprise attack, blasts both of the aliens away, then lifts Vision and herself into a nearby courtyard, from where Wanda drags him to rest in a concealed alleyway.]
Vision: The blade. It stopped me from phasing.
Wanda Maximoff: Is that even possible?
Vision: It isn't supposed to be. [his voice distorts electronically] My systems are failing. [Wanda gestures over his gaping wound, using her magic to knit him back together. Vision
 
continues in a gasping, wry tone] I'm beginning to think... we should have stayed in bed.
[Corvus Glaive suddenly arrives, knocking Wanda aside and grabbing Vision into the air]
Wanda Maximoff: Vis!
[Corvus flies away with Vision, slamming him against several walls. Meanwhile, Proxima engages Wanda with her staff weapon and they too begin to fight.]
Corvus Glaive: [to Vision] Give up the Stone, and she lives. [Vision flies with Corvus to the roof of what appears to be a church, riccocheting off the stone church tower and onto the metal-clad roof]
[Simultaneously, Proxima and Wanda fight below, staff weapon versus magic energy hands until Proxima uses the blaster effect of her weapon to knock Wanda meters away, stunning her as Proxima leaps down, brandishing her weapon within bare inches of Wanda's face, only held back by Wanda's powers]
[Furiously, Vision pummels Corvus, then throws him across the roof, firing a beam from the Mind Stone. Corvus uses his glaive to deflect the beam, splitting it into several beams, cutting up Edinburgh's ancient stone like butter, until one branch finally reflects back at Vision, slamming him into the wall behind him.] [Down below, Wanda has blocked Proxima's staff once again when she hears an agonized cry from Vision. Desperation strengthens her to throw Proxima through the burning lorry sliced in half by the split Stone beam, stunning the alien. Wanda then flies up to the roof where Glaive has pinned Vision and is again attempting to remove the Mind Stone.]
Wanda Maximoff: Hands off.
[Wanda casts a bolt of magic which throws Corvus back through the wall and down a shaft, then flies the two of them away again. Proxima, who has recovered, shoots a bolt from her
 
weapon, causing them to fall from the air and down through the roof of Edinburgh Waverley Train Station. Wanda crawls over to Vision, who cannot muster the strength to stand.]
Wanda Maximoff: [hushed voice, pleading.] Come on. Come on. Come on, you gotta get up. You gotta get up. Come on. Hey. Hey. We have to go.
Vision: Please. Please leave.
Wanda Maximoff: You asked me to stay... I'm staying.
Vision: Please.
Wanda Maximoff: Get up.
[Behind them, Proxima and Corvus crash through the roof and advance on them, brandishing their weapons. Wanda moves protectively in front of Vision, building power in her hands.] [An express train passes behind Wanda, and Proxima cocks her head as if aware of another's presence. Confused, Wanda also turns and looks over her left shoulder. As the last train car passes, we see a silhouette on the far side of the platform.
Proxima throws her weapon at the shadowy figure, but it is deftly caught just before the figure steps from the shadows.] [As the Avengers theme kicks in, we now recognize a bearded and furious Steve Rogers (Captain America) as he steps into the light. Vision and Wanda look hopeful and relieved. While all parties are distracted, Sam Wilson (Falcon) swoops in and kicks Proxima across the platform and through the closed café's security gate and furniture. Swooping around, he fires on Corvus.]
[At the same time, Captain America throws Proxima's weapon to Natasha Romanoff (Black Widow) who engages Corvus, ducking under his swing, stabbing him in the gut and executing a flying kick to knock him backwards.]
[Proxima, who has rushed back to the fight, summons her weapon back to her hand and attacks Black Widow. Captain America leaps
 
forward, rolls, scoops up Corvus's dropped glaive and holds her off. Black Widow joins in with her own escrima sticks. While the three are fighting, Falcon returns and again kicks Proxima backwards; she scuttles over to the prone Corvus. Falcon draws both of his Steyr SPP submachine pistols on the couple.]
Proxima Midnight: [to Glaive] Get up.
Corvus Glaive: I can't.
Natasha Romanoff: [coolly] We don't wanna kill you. But we will.
Proxima Midnight: You'll never get the chance again.
[Proxima Midnight and Corvus Glaive depart as they are beamed up. The glaive is snatched from Cap's hand as well.]
Sam Wilson: [to Vision] Can you stand?
Vision: [electricity shimmers over his surface, and his voice distorts] Thank you, Captain.
Steve Rogers: [nods] Let's get you on the jet.
Natasha Romanoff: [closing the doors to the Quinjet, while addressing Wanda] I thought we had a deal. Stay close, check in. Don't take any chances.
Wanda Maximoff: I'm sorry. We just wanted time.
Sam Wilson: Where to, Cap?
Steve Rogers: Home.
[Cut to the past, at Gamora's home planet Zen-Whoberi during Thanos's massacre. Gamora and her mother are hiding; the sounds of guns and screaming are outside.]
Gamora's Mother: [to Young Gamora] Shhh. We'll be safe. We'll be safe.
[An explosion goes off close by and Gamora screeches by reflex, revealing their hiding spot.]
Child of Thanos: [untranslated inquiry]
[The door is smashed open and both Zehobereians scream.] [Outside, it is utter chaos. Leviathans, Chitauri chariots and ring-ships fly overhead; explosions and energy bolts from
 
numerous sources criss-cross the panicked population, felling them randomly; smoke arises from countless fires.]
Ebony Maw: Zehobereians…
Young Gamora: [being dragged by one arm through the crowds] Mother! Where's my mother?!
Ebony Maw: Choose a side, or die.
Young Gamora: Mother! [She punches at the arm of the one dragging her who surprisingly drops her arm and leaves]
Ebony Maw: One side is a revelation. The other, an honor known only to a few.
[Gamora turns and finds herself facing Thanos in his full Titan armour.]
Thanos: What's wrong, little one?
Young Gamora: My mother. Where is my mother? Thanos: [kneels down to Gamora.] What's your name? Young Gamora: Gamora.
Thanos: You're quite the fighter, Gamora. Come. Let me help you. [Thanos offers his hand; she wraps her little fingers
around one massive finger, and he leads her to a pavilion, where he crouches to her eye level again and produces a small - for him - red-jeweled handle. Pressing the switch, razor-sharp blades pop out both ends.] Look. Pretty, isn't it? Perfectly balanced. As all things should be. Too much to one side, or the other… [He balances it on one finger, overbalances it purposefully and catches it.] Here. You try.
[Thanos hands Gamora the dagger - the handle is two child-palms' widths in length. She tries balancing it on her index finger.] Ebony Maw: Now go in peace, and meet your Maker.
[One half of the crowd is shot down. The survivors scream in horror, and Gamora tries to turn but Thanos prevents her from seeing the massacre.]
Thanos: Concentrate. There! You've got it.
 
[Cut to the present, aboard the GUARDIANS’ ship. Gamora is brooding, activates the spring-action blades on the same dagger.]
Peter Quill: Gamora. Do you know if these grenades are the "blow off your junk" kind or the gas kind? 'Cause I was thinking I might hang a couple on my belt right here. But I don't want to- Gamora: I need to ask a favor.
Peter Quill: Yeah, sure.
Gamora: One way or another, the path that we're on leads to Thanos.
Peter Quill: Which is what the grenades are for. [Gamora silences him with a look.] I'm sorry. What's the favor? Gamora: If things go wrong… If Thanos gets me… I want you to promise me… you'll kill me.
Peter Quill: [A beat. Confusion.] What?
Gamora: I know something he doesn't. If he finds out… The entire Universe could be at risk.
Peter Quill: What do you know?
Gamora: If I tell you, you'd know, too.
Peter Quill: If it's so important, shouldn't I?
Gamora: Only if you wanna die.
Peter Quill: Why does somebody always have to die in this scenario?
Gamora: Just… trust me. And possibly, kill me.
Peter Quill: I mean, I'd like to. I really would… [Gamora silences him by covering his mouth with her hand.] Gamora: Swear to me. Swear to me on your mother.
Peter Quill: [a beat. One that rests with him significantly.] Okay.
[The two kiss, until an odd crunching sound startles them. Drax is standing in the corner.]
Peter Quill: Dude. How long have you been standing there?
 
Drax: An hour.
Peter Quill: An hour? Are you serious?
Drax: I've mastered the ability of standing so incredibly still... That I become invisible to the eye... Watch. [Drax stands motionless, then very slowly raises his hand towards his mouth]
Peter Quill: You're eating a zarg-nut.
Drax: But my movement... was so slow... that it's imperceptible. Peter Quill: Mmm, no. [Quill and Gamora shake their heads.] Drax: I'm sure I'm invisible.
Mantis: Hi, Drax.
Drax: [Knowing when he is beat] Damn it.
[The Benatar flies towards a massive skull and flies through one eyehole into a vast interior cavern. Screen title: KNOWHERE] Peter Quill: This place looks deserted.
Drax: I'm reading movement from the third quadrant.
Peter Quill: Yep. I'm picking that up, too. Let's put it down right here.
[The four Guardians disembark and sneak into the Collector’s collection room, which is in ruins. Thanos is threatening the Collector while the Guardians hide behind rubble.]
Collector: I don't have it.
Thanos: Everyone in the Galaxy knows you'd sell your own brother if you thought it would add the slightest trinket to your pathetic collection.
[Quill stops, and holds up a fist meaning 'halt' in the silent language of soldiers. Everybody walks quietly past him.] Thanos: I know you have the Reality Stone, Tivan. Giving it to me will spare you a great deal of suffering. [Thanos places a heavy boot on the middle of the Collector's chest and presses.] Collector: [strained] I told you. I sold it. Why would I lie?
Thanos: I imagine it's like breathing for you.
 
Collector: Like suicide.
Thanos: So you do understand. Not even you would surrender something so precious.
Collector: I didn't know what it was.
Thanos: Then you're more of a fool than I took you for. Last chance, charlatan. Where's the Stone?
Drax: Today...
Peter Quill: [grasping the danger] Drax. Drax.
Drax: ...he pays for the deaths of my wife and daughter.
Peter Quill: Drax, waaaaait! [Drax draws his long dagger from his leg scabbard] Not yet, not yet, not yet. [Drax gives him a look and heads towards Thanos. Quill hurries as quietly as possible to catch up.] Drax, Drax, Drax. He doesn't have the Stone yet. We get it, and then we can stop him. We have to get the Stone first. Yeah.
Drax: No. No. For Ovette. For Camaria.
[Quill starts to struggle with Drax when Mantis puts her hand on the back of Drax's head]
Mantis: Sleeeep. [Drax is knocked out, his falling body causing a loud crash. Everybody ducks.]
[Thanos looks towards the sound, then picks up the Collector and throws him into a collecting case before walking towards the disturbance]
Peter Quill: Okay. Gamora, Mantis, you go right. I'm... [Gamora moves towards Thanos] The other right!
[Gamora leaps on Thanos from a stack of boxes, swinging her sword at him. He snaps the swordblade in half, and Gamora stabs him in the throat with the stub, his lower jaw sagging and himself letting out a hoarse groan, then he is stabbed in the chest with the red-jewelled dagger.]
 
Thanos: Why? [he falls down] Why you? Daughter… [he holds his hand out to her, blood pooling out from his neck wound, before collapsing completely. Gamora breaks down, sobbing.]
Peter Quill: [surprised] That was quick.
Collector: Magnificent! Magnificent! Magnificent!
[Suddenly, Thanos's disembodied voice fills the room.] Thanos: Is it sadness I sense in you, daughter? In my heart, I knew you still cared. But one ever knows for sure. Reality is often disappointing.
[The scene disappears - everything in the room is destroyed and/or on fire, the Collector waving bye-bye as he and his case vanish]
Thanos: That is, it was. Now… Reality can be whatever I want. [Thanos is quite alive and undamaged. He has the red Reality Stone seated in the Infinity Gauntlet.]
Gamora: [her face still wet, but no longer crying] You knew I'd come.
Thanos: I counted on it. There's something we need to discuss, little one.
[Gamora hesitates for a beat, then reaches for her broken sword. Thanos grabs her by the back of the neck and swings her around in front of him.]
Drax: Thanos!
[With a pulse of the Reality Stone, both Drax and Mantis are 'disassembled' -- Drax is turned into a stack of tumbling cubes, and Mantis becomes a ribbon version of herself.]
Peter Quill: [Moving in, his blaster pointed right at Thanos] Let her go, Grimace!
Gamora: Peter…
Peter Quill: [to Gamora] I told you to go right.
Gamora: Now? Really?
Peter Quill: You let her go!
 
Thanos: Ah, the boyfriend.
Peter Quill: I like to think of myself more as a Titan-killing long-term booty call. Let her go.
Gamora: Peter…
Peter Quill: Or I'm gonna blow that nutsack of a chin right off your face!
Gamora: Not him.
[Quill hesitates. He does not shoot anyone.]
Gamora: You promised! You promised.
Thanos: Oh, daughter. You expect too much from him. [to Quill] She's asked, hasn't she? Do it. [There is a very tense and unpleasant pause. Thanos rolls his head and shoves Gamora towards Quill’s gun, egging him on.] DO IT!!
Peter Quill: [tearing up] I told you to go right.
Gamora: I love you, more than anything.
Peter Quill: I love you, too.
[Quill screws up his eyes and pulls the trigger - but a stream of bubbles comes out. Thanos was playing him.]
Thanos: [genuinely sincere] I like you.
[Thanos teleports Gamora and himself away as a stunned Quill picks up Gamora's sword, and his friends painfully re-assemble themselves, the Reality Stone's effects now subsiding in its absence.]
(Back on Earth, the quinjet arrives at the upstate New York Avengers HQ while Col. James "Rhodey" Rhodes deals with the red tape in the holographic person of Secretary of State Thaddeus Ross (Lt. Gen., USA Ret.).)
Secretary Ross: Still no word from Vision?
James Rhodes: Satellites lost him somewhere over Edinburgh. Secretary Ross: On a stolen quinjet with four of the world's most wanted criminals.
 
James Rhodes: You know they're only criminals because you've chosen to call them that, right, sir?
Secretary Ross: My God, Rhodes, your talent for horseshit rivals my own.
James Rhodes: If it weren't for those Accords, Vision would've been right here.
Secretary Ross: I remember your signature on those papers, Colonel.
James Rhodes: [sounding a little bitter] That's right. And I'm pretty sure I've paid for that. [we get a good look at his leg braces]
Secretary Ross: You have second thoughts?
James Rhodes: Not anymore.
[The fugitive Avengers enter the room, Vision supported by Falcon.]
Steve Rogers: Mr. Secretary.
Secretary Ross: You got some nerve. I'll give you that. Natasha Romanoff: You could use some of that right now. Secretary Ross: The world's on fire. And you think, all is forgiven?
Steve Rogers: I'm not looking for forgiveness. And I'm way past asking for permission. Earth just lost her best defender. So we're here to fight. [Cap takes a step forward, looking right at Ross] And if you wanna stand in our way... we'll fight you, too. Secretary Ross: [to Rhodes] Arrest them.
James Rhodes: All over it. [swipes off hologram; the computer beeps twice] That's a court-martial. It's great to see you, Cap. Steve Rogers: [hugging War Machine] You too, Rhodey. [Black Widow gets her own embrace]
James Rhodes: Well. You guys really look like crap. Must've been a rough couple of years.
Sam Wilson: Yeah, well, the hotels weren't exactly five star.
 
Bruce Banner: Uh, I think you look great. [Rhodes and Natasha long round to see Bruce walking in from the opposite end of the room] Uh... heh... Yeah. I'm back.
Natasha Romanoff: Hi, Bruce.
Bruce Banner: Nat.
Sam Wilson: [whispering] This is awkward.
[Cut to a shot of Natasha, Bruce, Steve, Rhodey, Wanda, and Vision in another room.]
James Rhodes: So we gotta assume they're coming back, right?
Wanda Maximoff: And they can clearly find us.
Bruce Banner: We need all hands on deck. Where's Clint? Natasha Romanoff: After the whole Accords situation, he and Scott took a deal. It was too tough on their families, they're on house arrest.
Bruce Banner: Who's Scott?
Steve Rogers: Ant-Man.
Bruce Banner: There's an Ant-Man and a Spider-Man? Okay, look… Thanos has the biggest army in the universe. And he is not gonna stop until he... he gets... Vision's Stone.
Natasha Romanoff: Well then, we have to protect it.
Vision: No, we have to destroy it. I've been giving a good deal of thought to this entity in my head, about its nature. But also, its composition. I think if it were exposed to a sufficiently powerful energy source, something, very similar to its own signature, perhaps… Its molecular integrity could
fail. [Vision addresses Wanda as he nears her]
Wanda Maximoff: And you, with it. We're not having this conversation.
Vision: Eliminating the stone is the only way to be certain that Thanos can't get it.
Wanda Maximoff: That's too high a price.
 
Vision: [takes her face gently in both hands] Only you have the power to pay it. [Wanda walks away, distressed] Thanos threatens half the Universe. One life cannot stand in the way of defeating him.
Steve Rogers: [Eyes diverted down.] But it should. [looks up at Vision] We don't trade lives, Vision.
Vision: [walking toward Steve] Captain, 70 years ago, you laid down your life to save how many millions of people. Tell me, why is this any different?
[Steve takes a breath, but before he has a chance to answer, Bruce speaks]
Bruce Banner: Because you might have a choice. Your mind is made up of a complex construct of overlays. J.A.R.V.I.S., Ultron, Tony, me, the Stone. All of them mixed together. All of them learning from one another.
Wanda Maximoff: You're saying Vision isn't just the stone? Bruce Banner: I'm saying that if we take out the stone, there's still a whole lot of Vision left. Perhaps the best parts.
Natasha Romanoff: Can we do that?
Bruce Banner: Not me. Not here.
James Rhodes: You better find someone, and somewhere fast. Ross isn't exactly just gonna let you guys have your old rooms back. Steve Rogers: I know somewhere.
[Cut to rural Wakanda, as T'Challa and Okoye walk together, accompanied by two Kingsguard. Screen title: WAKANDA.]
Okoye: You'll have the Kingsguard, and the Dora Milaje have been alerted.
T'Challa: And the Border Tribe?
Okoye: Those that are left.
T'Challa: Send word to the Jabari as well. M'Baku likes a good fight.
Okoye: And what of this one?
 
T'Challa: This one may be tired of war. [Bucky Barnes is seen at a small distance throwing a bag from a pile on the ground onto a partly-filled cart, while two village children watch] But the White Wolf has rested long enough.
[The party reaches Bucky. A Kingsguardsman sets an elaborate and high-tech-looking equipment case down on the cart, opens the lid, and steps back. As the Winter Soldier approaches, he sees a new vibranium arm in the case.]
Bucky Barnes: [with resignation] Where's the fight?
T'Challa: On its way.
[Cut to Ebony Maw interrogating Doctor Strange. Strange is floating horizontally, face down, and is surrounded by dozens of glassy needles, each about two feet long]
Ebony Maw: In all the time I've served Thanos, I've never failed him. If I were to reach our rendezvous on Titan with the Time Stone still attached to your vaguely irritating person, there would be...judgement. [the needles start to contact Strange's face, causing an obviously painful whitish subcutaneous glow at each touch] Give me... the stone.
[Cut to Iron Man who is watching, hidden, from above. The Cloak of Levitation taps Stark on the arm. He raises his hand to it, ready to shoot, but he sees what it is and stands down.]
Tony Stark: Wow you're a seriously loyal piece of outerwear, aren't you?
Peter Parker: Yeah, uh, speaking of loyalty...
[Iron Man and the Cloak turn to face Spider-Man, dropping down from above]
Tony Stark: What the-
Peter Parker: I know what you're gonna say.
Tony Stark: You should not be here.
[The Cloak moves to "stand" at Iron Man's side]
Peter Parker: I was gonna go home -
 
Tony Stark: I don't wanna hear it.
Peter Parker: But it was such a long way down and I just thought about you on the way...
Tony Stark: And now I gotta hear it.
[The Cloak shakes its collar in sympathy and shrugs]
Peter Parker: ...And I kinda stuck to the side of the ship. And this suit is ridiculously intuitive, by the way. So if anything, it's kinda your fault that I'm here.
[The Cloak looks shocked]
Tony Stark: (seriously) What did you just say?
Peter Parker: I take that back. And now I'm here in space. Tony Stark: Yeah. [Iron Man crosses to stand right in front of Spidey] Right where I don't want you to be. This isn't Coney Island. This isn't a field trip. It's one-way ticket. You hear me? Don't pretend like you thought this through. You could not have possibly thought this through.
Peter Parker: No. I did think this through.
Tony Stark: You could not have possibly thought this through. Peter Parker: It's just- You can't be a friendly neighborhood Spider-Man when there's no neighborhood. [he waits for Iron Man's reaction] Okay. That didn't really make any sense, but you know what I'm trying to say.
Tony Stark: [breaths shakily] Come on. We got a situation. [he leads Spider-Man over to a viewpoint on the torture below.
Spidey crouches to study the situation, the Cloak leaning over his shoulder.] See him down there? He's in trouble. What's your plan? Go.
Peter Parker: Um. Okay, okay...uh... [Spidey and the Cloak pop back upright] Okay. Did you ever see this really old
movie, Aliens?
[The Cloak lifts its collar in surprise]
 
[Cut back to Ebony Maw interrogating Strange, who groans loudly.]
Ebony Maw: Painful aren't they? They were originally designed for microsurgery. And any one of them...
[at the "thump" behind him, Maw turns to see Iron Man standing there, hand repulsors ready to fire.]
Ebony Maw: ...could end your friend's life in an instant.
Tony Stark: I gotta tell you, he's not really my friend. Saving his life is more a professional courtesy.
Ebony Maw: [walks slowly towards Iron Man, beckoning very large, very solid metal objects to float behind him] You've saved nothing. Your powers are inconsequential compared to mine.
Tony Stark: Yeah, but the kid's seen more movies.
[Iron Man fires a rocket from his shoulder which pierces the side of the ship to Maw's right and begins to suck everything out with depressurization, especially Maw and his large objects. Strange is pulled loose of his pinnings, loses the needles, but also heads for the hole, helpless to resist. The Cape wraps around his arm and an anchor point, but Strange's arm slips loose and he keeps going. Spider-Man shoots a web strand at Strange with one hand and holds onto a piece of the ship with the other. It breaks, sending them both towards space when his Iron-Spider suit's metal arms brace him to keep him from being sucked out. Fortunately, Strange is still surrounded by the ship's atmosphere making haste to leave.]
Peter Parker: Yes! Wait what are those?!
[Spider-Man crouches with his new spider-legs, and makes a mighty leap to pulls them both back inside. Iron Man quickly sprays nanites onto the hole to plug it up. Strange safely, if emphatically, hits the floor. Ebony Maw is seen floating in space, quite dead, ice from the escaped atmosphere frosting over
 
his grimace. Spider-Man lands on his new legs, retracts them, and finds the Cape "standing" next to him.]
Peter Parker: Hey, we haven't officially met. [he offers the Cape his hand to shake. It ignores his offer and continues to Strange.] Cool.
[Iron Man walks past Strange, shaking his head and with his armor retreating into its containment as Strange gets to his feet and becomes en-Cloaked]
Doctor Strange: We've gotta turn this ship around. Tony Stark: Yeah. Now he wants to run. Great plan. Doctor Strange: No, I want to protect the stone.
[Iron Man walks towards the expansive front viewport, showing a hyperspeed/warp effect.]
Tony Stark: [irritably] And I want you to thank me now. Go ahead, I'm listening.
Doctor Strange: For what? Nearly blasting me into space?
Tony Stark: Who just saved your magical ass? Me.
Doctor Strange: I seriously don't know how you fit your head into that helmet.
Tony Stark: Admit it. You should have ducked out when I told you to. I tried to bench you. You refused.
Doctor Strange: Unlike everyone else in your life, I don't work for you.
Tony Stark: And due to that fact, we're now in a flying doughnut billions of miles away from Earth with no backup.
[Seriously, these two's egos are a recipe for disaster.]
Peter Parker: [raises his hand] I'm backup.
Tony Stark: No. You're a stowaway. [waggles a finger between himself and Strange] The adults are talking.
Doctor Strange: I'm sorry, I'm confused as to the relationship here. Wh-what is he, your ward?
Peter Parker: No. I'm Peter, by the way.
 
Doctor Strange: Doctor Strange.
Peter Parker: Oh, we're using our made-up names. Um... I'm Spider-Man, then.
Tony Stark: This ship is self-correcting its course. Thing's on autopilot.
Doctor Strange: [walks closer to Tony] Can we control it? Fly us home? [Iron Man is lost in bad memories and does not respond right away] Stark?
Tony Stark: Yeah?
Doctor Strange: Can you get us home?
Tony Stark: Yeah I heard you. I'm thinking...I'm not so sure we should.
Doctor Strange: Under no circumstance can we bring the Time Stone to Thanos. I don't think you quite understand what's at stake here.
Tony Stark: [stalks over to Strange] No. It's you who doesn't understand, that Thanos has been inside my head for six
years since he sent an army to New York and now he's back! And I don't know what to do. So I'm not so sure if it's a better plan to fight him on our turf or his but you saw what they did, what they can do. At least on his turf, he's not expecting it.
So I say we take the fight to him. Doctor. Do you concur? Doctor Strange: [pauses] Alright, Stark. We go to him. But you have to understand... if it comes to saving you or the kid or the Time Stone... I will not hesitate to let either of you die. I can't, because the fate of the universe depends on it.
Tony Stark: Nice. Good. Moral compass. We're straight. [stepping over to Spider-Man, he formally taps each of Spidey's shoulders with the edge of his hand, dubbing him as is done at a knighting] Alright, kid. You're an Avenger now. [He doesn't look at him as he says those words, knowing well what he is signing him up for.]
 
[Peter looks at Tony in disbelief, and then cycles through delight, satisfaction, pride and determination, and braces himself for what's to come.]
[Cut to Thanos's mothership, Sactuary II, which dwarfs the massive ring-ships the Black Order have been using. Gamora sits near the throne deep inside the ship. Thanos walks up, bringing a cup of food and holds it out to her.]
Thanos: I thought you might be hungry.
[Gamora takes it, then hurls it across the room where it bangs against Thanos's throne with a loud clack.]
Gamora: I always hated that chair.
Thanos: So I've been told. Even so. I'd hoped you'd sit on it one day.
Gamora: I hated this room. This ship. I hated my life.
Thanos: You told me that too. [Thanos mounts two of the four steps to his throne, turns, and sits on the second from the top.] Every day. For almost twenty years.
Gamora: I was a child when you took me.
Thanos: I saved you.
Gamora: No. No. We were happy on my home planet.
Thanos: Going to bed hungry, scrounging for scraps. Your planet was on the brink of collapse. I'm the one who stopped that. Do you know what's happened since then? The children born have known nothing but full bellies and clear skies. It's a paradise. Gamora: Because you murdered half the planet.
Thanos: A small price to pay for salvation.
Gamora: You're insane.
Thanos: Little one, it's a simple calculus. This universe is finite, its resources finite. If life is left unchecked, life will cease to exist. It needs correction.
Gamora: You don't know that!
 
Thanos: [scowls as hs egotistical narcissism prevents him from fully listening to her] I'm the only one who knows that. At least, I'm the only one with the will to act on it. [he stands again and walks back to Gamora] For a time... you had that same will... as you fought by my side. Daughter.
Gamora: I'm not your daughter. Everything I hate about myself you taught me.
Thanos: And in doing so, made you the fiercest woman in the galaxy. That's why I trusted you to find the Soul Stone.
Gamora: I'm sorry I disappointed you.
Thanos: I am disappointed. But not because you didn't find it. [leans down to put their heads at a level, whispering fiercely] But because you did. [looks at her] And you lied.
[Thanos and Gamora stand outside a large solid door that slides open vertically as they approach, then pause as a set of inner doors made of interlacing metal slide away. Inside, we see Nebula face-on, suspended horizontally in the air in the middle of the room, her breath shuddering in pain.]
Gamora: Nebula.
[Gamora hurries to to Nebula's left side, and we now see that she has been partially disassembled, her components stretched apart -- a cybernetic version of the medieval torture rack.
Hannibal Lecter level of brutality.]
Gamora: Don't do this.
Thanos: Some time ago, your sister snuck aboard this ship to kill me.
Gamora: Please don't do this.
Thanos: And very nearly succeeded. So I brought her here. To talk.
[Thanos curls his gauntleted fist, activating both the Power and Space Stones, scowling -- causing Nebula's already extended pieces to stretch further outward. She begins to scream.]
 
Gamora: Stop. Stop it. [she puts her hands on the gauntlet, pulling it down] I swear to you on my life. I never found the Soul Stone.
[Thanos signals a nearby servant who taps on a control pad. We hear Nebula's voice say, "Accessing memory files" and a sort of hologram of Gamora's face shudders to life.]
Memory Nebula: You know what he's about to do. He's finally ready, and he's going for the stones. All of them.
Memory Gamora: He can never get them all.
Memory Nebula: He will!
Memory Gamora: He can't, Nebula. Because I found the map to the Soul Stone and I burnt it to ash. I burnt it.
[The memory ends.]
Thanos: [to Gamora, walking around behind her] You're strong. Me. You're generous. Me. But I never taught you to lie. That's why you're so bad at it. [his voice drips with disgust] Where is the Soul Stone? [He raises his gauntlet next to Gamora's face.
Nebula shakes her head, expression terrified, to encourage her sister's silence but when Gamora does not answer, Thanos clenches the gauntlet again, brow furrowed at his adopted daughter as the Power and Space Stoes are reactivated. Gamora grimaces in shared pain at her sister's screams, growing louder as Thanos increases the pressure.]
Gamora: Vormir! [Thanos unclenches his hand, and Nebula gasps in air as her parts snap back almost into place. Gamora goes to her and caresses her face.] The Stone is on Vormir.
Thanos: [satisfied.] Show me.
[Cut to the pod taking Thor, Rocket and Groot to Nidavellir.]
Groot: [irritably] I am Groot.
Rocket: Tinkle in the cup. We're not looking. What's there to see? What's a twig? Everybody's seen a twig.
Groot: [still irritably] I am Groot.
 
Thor: [while looking out the rear portholes] Tree, pour what's in the cup out in space, and go in the cup again.
Rocket: You speak Groot?
Thor: Yes, they taught it on Asgard. It was an elective.
Groot: [shortly] I am Groot.
Thor: You'll know when we're there. Nivadellir's forge harnesses the power of a blazing neutron star. [nostalgically] It's the birth place of my hammer. It's truly awesome.
[Rocket turns to see Thor sitting sadly beside the window, and sighs.]
Rocket: [to himself] Okay, time to be the captain. [walks to a console near by Thor], presses two buttons] So, dead brother, huh? Yeah, that can be annoying.
Thor: Well, he's been dead before, but this time I think it really might be true.
Rocket: And you said your sister and your dad?
Thor: Both dead.
Rocket: Still got a mom, though?
Thor: Killed by a dark elf.
Rocket: A best friend?
Thor: Stabbed through the heart.
Rocket: Are you sure you're up to this particular murder mission?
Thor: [smiling widely but also trying to convince himself] Absolutely. Rage, vengeance, anger, loss,
regret...They're all tremendous motivators. They really clear the mind. So I'm good to go.
Rocket: Yeah, but this Thanos we're talking about... he's the toughest there is.
Thor: Well, he's never fought me.
Rocket: Yeah, he has!
 
Thor: He's never fought me twice. And I'm getting a new hammer, don't forget.
Rocket: Better be some hammer.
Thor: You know, I'm 1,500 years old. I've killed twice as many enemies as that, and every one would have rather killed me, but none succeeded. I'm only alive because fate wants me alive.
Thanos is the latest in a long line of bastards and he will be the latest to feel my vengeance. Fate wills it so.
Rocket: And what if you're wrong?
Thor: If I'm wrong then... what more could I lose?
[Thor sniffs and hastily wipes below his eye. He stands and seats himself at the front of the pod, beside Groot.]
Rocket: [under his breath] I could lose a lot. Me personally. I could lose a lot. [Rocket takes an eyeball from somewhere on his person] Okay. If fate does want you to kill that crapsack...
You're gonna need more than one stupid eyeball. [he gives Thor the eyeball]
Thor: What's this?
Rocket: What's it look like? Some jerk lost a bet with me on on Contraxia.
Thor: He gave you his eye?
Rocket: He gave me 100 credits. I snuck in later that night and stole his eye.
Thor: Thank you, sweet rabbit.
[Thor proceeds to put the eyeball in his socket. We are thankfully spared the explicit insertion.]
Rocket: Hmm. Huh? Oh. I would've washed that. The only way I could sneak it off Contraxia was up my...[beeping] Hey, we're here!
Thor: [Smacking his palm against the side of his head to get the eye calibrated] I don't think this thing works. Everything seems dark.
 
Rocket: It ain't the eye.
[Nidavellir is dark and motionless as the three rings around it.]
Thor: Something's wrong. The star's gone out. And the rings are frozen.
[The pod flies through massive machinery, cold and inert. Screen title: NIDAVELLIR]
[The pod sets down; Thor, Rocket and Groot disembark and start walking through a seemingly abandoned and cluttered space. Groot is still playing his game.]
Rocket: I hope these dwarves are better at forging than they are cleaning. Maybe they realized they live in a junk pile in the middle of space.
Thor: This forge hasn't gone dark in centuries...
Rocket: [pauses, looking at a pedestal] You said Thanos had a gauntlet, right?
Thor: Yes. Why?
Rocket: Look anything like that? [in fact, it looks exactly like that]
Groot: [uneasily] I am Groot.
Thor: [urgently] Go back to the pod.
[Suddenly a massive figure storms towards them, flinging Thor away with one swing of his arm, and kicking Rocket and Groot against a wall of equipment]
Thor: Eitri, wait! Stop!
Eitri: Thor?
[Eitri is played by the legendary Peter Dinklage - his giant size literally juxtaposing his name of dwarf.]
Thor: What happened here?
Eitri: You were supposed to protect us. Asgard was supposed to protect us!
 
Thor: Asgard is destroyed. [Thor scrambles to his feet and points. Eitri stop his attack on Thor. He now believes Thanos had destroyed Asgard and leaving him in a similar survivor role like Eitri himself.] Eitri, the glove. What did you do?
Eitri: [he walks brokenly across the space to sit heavily, leaning against an ore skip. Rocket and Groot get to their feet, the sapling checking his game.] 300 dwarves lived on this ring. I thought if I did what he asked, they'd be safe. I made what he wanted. A device capable of harnessing the power of the stones. Then he killed everyone anyway. All except me. "Your life is yours." he said. "But your hands are mine alone." [he holds up his immobile metal fists, encased in hardened molten metal] Thor: Eitri, this isn't about your hands. Every weapon you've designed, every axe, hammer, sword...It's all inside your head. Now I know all hope feels lost. Trust me, I know. But together, you and I, we can kill Thanos.
[Cut to Nebula suspended in the interrogation room seen earlier, while a technician puts her back together. Nebula ejects her eyepiece and snaps the neck of the tech when he comes close enough to replace it. She walks to a console, straightening her left arm, dragging her still-dislocated right foot behind her, and inputs a code.]
Nebula: Mantis, listen very carefully. I need you to meet me on Titan.
[Cut to Peter Parker, Tony Stark, and Doctor Strange aboard the ship approaching the surface of Titan]
Peter Parker: [to Tony] Hey, what's going on?
Doctor Strange: I think we're here.
Tony Stark: I don't think this rig has a self-park
function. [urgently] Get your hand into this steering gimbal. Close those around it. You understand?
Peter Parker: Yep, got it.
 
Tony Stark: This was meant for one big guy, so we gotta to move at the same time.
Peter Parker: Okay. Okay. Ready.
[the ringship is heading straight for the center of what looks like one of a colossal game of jacks]
Peter Parker: We might wanna turn. Turn! Turn! Turn!
[Iron Man armors up as the ringship clips the "jack" obliquely, but still losing a good third of its hull in the collision.
Spider-Man throws up his helmet at the same time. Strange steps between them and creates the Shield of the Seraphim around them all, anticipating a rough landing.]
[The ship, now reduced to about 45%, plows through the dirt and stops, leaning slightly to one side. Screen title: TITAN.] [Strange helps Tony, now de-helmeted, to his feet; they're both panting a little from the exertion of arrival]
Tony Stark: [to Strange] You alright? [Panting] That was close. I owe you one.
[Spider-Man descends from above in classically spider-like fashion.]
Peter Parker: Let me just say, if aliens wind up implanting eggs in my chest or something, and I end up eating you, I'm sorry.
Tony Stark: [while pointing at Peter] I don't wanna hear another single pop culture out of you for the rest of the trip. You understand?
Peter Parker: I'm trying to say that... something is coming. [A grenade rolls into view, and Peter, Strange and Tony get thrown well back when it fires its energy pulse. Star-Lord, Drax, and Mantis appear in the doorway]
[Suddenly, an grenade appears out of nowhere and explodes Iron Man, Spider-Man and Doctor Strange, then Star-Lord, Drax and Mantis arrive and attack everyone]
 
Drax: [yelling] THANOS!!!! [he flings a blade at Doctor Strange, who neatly deflects it with a mystical shield, and in return sends the Cloak of Levitation at Drax's face, half-smothering him and throwing him to the floor. Star-Lord and Iron Man have a brief dogfight until a magnetic disc pins Iron Man face-first to a structure]
Peter Parker: [crawling backwards frantically from an anxious- looking Mantis] AH! Whoa, whoa, whoa, whoa! PLEASE DON'T PUT YOUR EGGS IN ME!
[Peter shoots web at Mantis in a panic, pinning arms to her body just before Star-Lord flies at him feet-first, kicking him away.]
Peter Quill: Stay down, clown!
[Star-Lord can't quite counter spider reflexes at first; he fires at Spider-Man, who extends his spider legs and leaps away, but an electric-like cord wraps around Spidey and his six new legs when he tries to attack, sending him rolling across the deck]
Drax: [struggling with the Cloak of Levitation] Die, blanket of death!
[Iron Man pulls free of the magnet; the Cloak pulls free of Drax as soon as Iron Man has a bead on his opponent and a foot on his torso.]
[Star-Lord has Spider-Man in a head-lock, gun pointed at the smaller man's head]
[Doctor Strange has a mystical shield of golden energy up, and stands ready at the third point of the triangle. Mantis has struggled to her feet behind Star-Lord, still covered with webbing.]
Peter Quill: Alright, everybody, stay where you are... Chill the F out. [Quill powers off his helmet] I'm gonna ask you this one time. Where's Gamora?
 
Tony Stark: [de-helmeting] Yeah, I'll do you one better. Who's Gamora?
Drax: I'll do you one better! Why is Gamora?!
Peter Quill: Tell me where the girl is, or I swear to you, I'm gonna French-fry this little freak.
Tony Stark: Let's do it! You shoot my guy, I blast him. Let's go! [Tony extends his nanotech cannon, looking uncannily like an electric shark about to eat Drax's face]
Drax: Do it, Quill! I can take it.
Mantis: No, he can't take it!
Strange: [completely deadpan] She's right. You can't. Peter Quill: Oh yeah? You don't wanna tell me where she is? That's fine. I'll kill all three of you and beat it out of Thanos myself. [to Spidey] Starting with you.
Strange: Wait, what. Thanos? [trying to inject clarity and sanity into the situation] Alright, let me ask you this one time: What master do you serve?
Peter Quill: What master do I serve? What am I supposed to say? "Jesus"?
Tony Stark: [getting it] You're from Earth?
Peter Quill: I'm not from Earth. I'm from Missouri.
Tony Stark: Yeah, that's on EARTH, dip-shit. What are you hassling us for?
Peter Parker: [sounding slightly crushed] So, you're not with Thanos?
Peter Quill: [indignantly] WITH Thanos?! No, I'm here to kill Thanos! He took my girl. Wait... who are you?
Peter Parker: [de-helmets] We're the Avengers, man.
Peter Quill: Oh.
Mantis: You're the ones Thor told us about!
Tony Stark: You know Thor!?
 
Peter Quill: Yeah. Tall guy, not that good-looking, needed saving.
Doctor Strange: [pause] Where is he now?
[Cut to Nivadellir where Eitri is showing Thor, Rocket, and Groot the mold for Stormbreaker.]
Rocket: This is plan? We're gonna hit him with a brick?
Eitri: It's a mold. A king's weapon. Meant to be the greatest in Asgard. In theory, it could even summon the Bifrost.
Thor: Did it have a name?
Eitri: Stormbreaker. Rocket: That's a bit much. Thor: So how do we make it?
Eitri: You'll have to restart the forge. Awaken the heart of a dying star.
Thor: Rabbit, fire up the pod.
[Cut to Titan where the Avengers and the Guardians are starting to work together. Quill is measuring the planet's tilt.]
Peter Quill: The heck happened to this planet? It's eight degrees off its axis. Gravitational pull is all over the place. [in the background, Mantis is jumping joyfully in a low gravity spot]
Tony Stark: Yeah, we got one advantage. He's coming to us. We'll use it. All right, I have a plan. Or at least the beginnings of one. It's pretty simple. We draw him in, pin him down, get what we need. Definitely don't wanna dance with this guy. We just want the gauntlet.
[Drax yawns.]
Tony Stark: Are you yawning? In the middle of this, while I'm breaking it down? Huh? Did you hear what I said?
Drax: I stopped listening after you said, "We need a plan." Tony Stark: [to Quill] Okay, Mr. Clean is on his own page. Peter Quill: See, "not winging it" isn't really what they do.
 
Peter Parker: Uh, what exactly is it that they do?
Mantis: [as fiercely as an 8-week-old kitten] Kick names, take ass.
Drax: Yeah, that's right. [agrees quietly as he settles into a stance facing the Avengers]
Tony Stark: [Iron Man pauses with an expression of deep hopelessness] Alright, just get over here, please. Mr. Lord, can you get your folks to circle up?
Peter Quill: "Mr. Lord." Star-Lord is fine. [motions to Drax and Mantis]
Tony Stark: We gotta coalesce. 'Cause if all we come at him with is a plucky attitude...
Peter Quill: Dude, don't call us plucky. We don't know what it means. Alright, we're optimistic, yes. I like your plan. Except it sucks, so let me do the plan, and that way it might be really good. [Spider-Man follows the conversation back and forth like a squash rally.]
Drax: Tell him about the dance-off to save the universe.
Tony Stark: What dance-off?
Peter Quill: It's not a... it's not... it's nothing.
Peter Parker: Like in Footloose, the movie?
Peter Quill: [excitedly] Exactly like Footloose. Is it still the greatest movie in history?
Peter Parker: It never was.
[Quill frowns sadly at him.]
Tony Stark: Don't encourage this, alright?
Peter Parker: Okay.
Tony Stark: We're getting no help from Flash Gordon here. Peter Quill: Flash Gordon? By the way, that's a compliment. Don't forget, I'm half human. [Quill points at Stark and Parker] So that 50% of me that's stupid? That's 100% you.
Tony Stark: Your math is blowing my mind.
 
Mantis: Excuse me, but... does your friend often do that? [Strange is sitting cross-legged, floating slightly above the ground, his hands poised in a mystic gesture with the Time Stone glowing brightly in the Eye of Agamotto setting. Green vapor- like energy flows from the stone, and more intricate magical energy patterns circle Strange's forearms. The Cloak of Levitation flows behind him as if the Stone is creating a strong breeze. His eyes are closed, and his head is jerking rapidly from side to side, the motion blurring, but resembling looking for something.]
Tony Stark: Strange! We alright?
[Strange snaps out of his trance and falls forward, letting out a cry]
Tony Stark: You're back. You're alright.
Peter Parker: Hey, what was that?
Doctor Strange: [panting] I went forward in time to view alternate futures. To see all the possible outcomes of the coming conflict.
Peter Quill: How many did you see?
Doctor Strange: 14,000,605.
Tony Stark: How many did we win?
[Strange stares intently at Tony for a moment]
Strange: [pause] One.
[Cut to Thanos and Gamora appearing on sand dunes alternating with shallow pools around the base of a mountain. The sun is in full eclipse, lending eerie lighting to the scene. Screen title: VORMIR]
Thanos: The stone had better be up there...For your sister's sake.
[The walk up the mountain seems to be long, but not difficult. Paths worn by centuries or more of feet lead up to the summit, where Thanos and Gamora encounter a floating hooded figure].
 
Stonekeeper: Welcome, Thanos, son of A'lars. Gamora, daughter of Thanos.
Thanos: You know us?
Stonekeeper: It is my curse to know all who journey here.
Thanos: Where's the Soul Stone?
Stonekeeper: You should know... it extracts a terrible price.
Thanos: I am prepared.
Stonekeeper: We all think that at first. [The figure touches down and glides out of the shadows, revealing the face of who we know to be Johann "The Red Skull" Schmidt from Captain America: The First Avenger] We are all wrong.
[The Stonekeeper guides them to a temple-like structure at the summit.]
Thanos: How is it you know this place so well?
Red Skull: A lifetime ago, I, too, sought the stones. I even held one in my hand. But it cast me out, banished me here.
Guiding others to a treasure I cannot possess.
[They stop on a semicircular engraving overlooking a sheer drop. It decends in three shallow steps to a final half-circle cutout, the whole bisected by a deep cut that runs between the two spires behind them. Far, far below is a full circle with similar engraved decoration.]
Red Skull: What you seek lies before you. As does what you fear.
Thanos: What's this?
Red Skull: The price. Soul hold a special place among the Infinity Stones. You might say it has a certain wisdom.
Thanos: Tell me what it needs.
Red Skull: To ensure that whoever possesses it... Understands its power... The stone demands a sacrifice.
Thanos: Of what?
Red Skull: In order to take the stone you must lose that which you love. A soul...For a soul.
 
[Gamora begins to laugh at the irony of the situation.] Gamora: All my life, I dreamed of a day...A moment when you would get what you deserved. And I was always so disappointed. But now...You kill and torture...And you call it mercy. The universe has judged you. You asked it for a prize, and it told you no. You failed. And do you wanna know why? Because you love nothing. No one.
Thanos: [turns to face Gamora with tears in his eyes]
Gamora: Really? Tears?
Red Skull: They're not for him.
[Gamora looks at the Red Skull, and as her bitter smile fades, realizes what is about to happen, as do we...]
Gamora: No. This isn't love.
Thanos: [thoroughly convicted.] I ignored my destiny once. I cannot do that again. Even for you. [Gamora stares down unseeing for a moment, then up at the resolution on his face. She grabs the red-jewelled dagger from his belt with lightning reflexes, triggers the blades and stabs herself in the stomach... except it's only bubbles.] I'm sorry, little one. [he grabs Gamora by the arm and walks inexorably to the precipice]
Gamora: NO!
[She tries in vain to break from his grasp, much like she tried to pull free from the Child of Thanos so many years ago, but, pain showing clearly on his face, he throws her over the edge, and watches sorrowfully as she falls to her death. Light pulses overhead as the sacrifice is correctly accomplished.]
[Thanos finds himself lying in one of the shallow pools back at the base of the mountain. He opens his hand and sees that he now has the orange Soul Stone.]
[Cut to the quinjet where Sam is piloting Rhodey, Steve, Natasha, Wanda, and Vision.]
 
Steve Rogers: [walking up to the pilot's seat] Drop to 2600, heading 0-3-0.
Sam Wilson: I hope you're right about this, Cap. Or we're gonna land a lot faster than you want to.
[The Quinjet passes through a camouflage force field into Wakanda's Golden City's valley and lands at the airfield outside the palace. T'Challa and the Dora Milaje approach to greet the arrivals]
Okoye: [Walking with T'Challa and a band of the King's Guard to the landing pad] When you said we were going to open Wakanda to the rest of the world...This is not what I imagined.
T'Challa: And what did you imagine?
Okoye: The Olympics. Maybe even a Starbucks.
[The occupants of the Quinjet disembark, Cap and Black Widow leading, followed by Bruce and Rhodey, with Vision and Wanda slowly taking up the rear]
Bruce Banner: [to Rhodey] Should we bow?
James Rhodes: [seriously] Yeah, he's a king.
Steve Rogers: Seems like I'm always thanking you for something. [shaking hands with T'Challa]
[Bruce bows awkwardly to T'Challa.]
James Rhodes: [mock shocked] What are you doing?
T'Challa: Uh, we don't do that here. [He dissuades Bruce with a motion of his hand; Bruce shoots Rhodey a look, and is answered with a big grin] So how big of an assault can we expect?
[The group begins to walk back into the administrative building.]
Bruce Banner: Uh, sir, I think you can expect quite a big assault.
Natasha Romanoff: How we looking?
T'Challa: You will have my King's Guard, the Border Tribe, the Dora Milaje, and...
 
Bucky Barnes: [smiling as he walks toward Steve, passing some Kingsguard taking Vision and Wanda to another facility] A semi- stable, 100-year-old man.
[The two friends share a hug.]
Steve Rogers: How you been, Buck?
Bucky Barnes: Uh, not bad, for the end of the world.
[In Shuri's lab, Shuri scans the Stone with her kimoyo beads while Vision lies on the examination table. She flips her hand over and studies the hologram projected over her palm]
Shuri: Whoa. The structure is polymorphic.
Bruce Banner: Right, we had to attach each neuron non- sequentially.
Shuri: Why didn't you just reprogram the synapses to work collectively?
[Vision looks at Bruce as if to ask the same thing.]
Bruce Banner: [uncertainly] Because, we didn't think of it. Shuri: [reassuringly, with a smile] I'm sure you did your best. Wanda Maximoff: Can you do it?
Shuri: Yes, but there are more than two trillion neurons here. One misalignment could cause a cascade of circuit failures. [to T'Challa] It will take time, brother.
Steve Rogers: How long?
Shuri: As long as you can give me.
Okoye: [her kimoyo beads chime an alarm; she flicks one bead into her palm, where it projects the globe with a pulsing location marker] Something's entered the atmosphere. [Outside, Falcon and Bucky look up at the sky]
Sam Wilson: [over the Avengers' comm] Hey, Cap, we got a situation here.
[The defense shield over the Golden City destroys one of the alien vessels when it slams into the field at full attack acceleration.]
 
Bucky Barnes: God, I love this place.
James Rhodes: [also outside, and now in full War Machine armor watching three more ships burn through the sky]Yeah, don't start celebrating yet, guys. We got more incoming outside the dome. [The shock waves and debris from the ship landings destroy acres of forest and boil up against the dome. The lab has an excellent view of the landing sites. Captain America and Black Panther look at each other in concern over the scope of what they'll be facing.]
Vision: [struggling to sit up and slide off the exam table] It's too late. We need to destroy the stone now.
Natasha Romanoff: [moving toward Vision] Vision, get your ass back on the table.
T'Challa: We will hold them off. [he, Okoye and the guards head
for the door]
Steve Rogers: [to Wanda] Wanda, as soon as the stone's out of his head... you blow it to hell.
Wanda Maximoff: I will.
T'Challa: Evacuate the city. Engage all defense procedures. [he stops, turns, and points at Cap] And get this man a shield.
[Cut to Nivadellir where Rocket is in the pod, and Thor, without any environmental suit, jumps from the hull onto the ring surface with a cable in his hand attached to the pod]
Rocket: I don't think you get the scientifics here. These rings are gigantic. You wanna get them moving, you're gonna need something a lot bigger to yank 'em loose.
Thor: Leave that to me.
Rocket: Leave that to you? Buddy, you're in space. All you got is a rope and a-
[Thor begins to swing the pod around him in a circle. Rocket screams. Thor builds up speed with three good loops then slacks his grip enough to send the pod shooting straight away from
 
Nidavellir, trailing him behind it like a kite tail] Fire the engines!
Rocket: [Rocket shakes it off and puts the proverbial pedal to the metal] Nnnyah!
Thor: [As the pod skims over the surface of the next ring out, Thor reaches down and digs one hand into the surface, then both feet, finally getting a foothold against the forward motion of the pod. The ice-like accumulation around the ring axis crackles.] MORE... POWER... RABBIT!
[Thor commits bicep porn while Rocket accelerates for all he's worth. Finally the rings spin free, realigning into effective configuration as the star bursts back into life.]
Eitri: Well done, boy.
[Thor, clutching the pod's forward windows, points to the star]
Thor: That's Nivadellir!
[Rocket gazes amazed at the blazing core. An iris on the cladding around the star opens, firing pure stellar heat through the ring portals and into the forge... until the damaged mechanism fails, crumbles loose and slams shut. The iris closes and the beam of light trails off.]
Eitri: Damn it.
Rocket: "Damn it"? What's "damn it"?
Eitri: The mechanism is crippled.
Thor: What?
Eitri: With the iris closed I can't heat the metal.
Thor: How long will it take to heat?
Eitri: A few minutes, maybe more. Why?
Thor: [standing up on the pod hull] I'm gonna hold it open.
Eitri: That's suicide.
Thor: So is facing Thanos without that axe. [he leaps from the pod to the star's iris.]
 
[Cut to the Wakandan battlefield. Carriers hover over the ground with Wakandan soldiers and Natasha, Steve and Bucky on board; War Machine and Falcon keep pace overhead, and Bruce is in the Hulkbuster armor.]
Natasha Romanoff: How we looking, Bruce?
Bruce Banner: [leaping jogging along, keeping up with the carriers, and utterly delighted] Yeah, I think I'm getting the hang of it. Wow! It's like being the Hulk without actually- [He stumbles on a rock, and a carrier goes by, from which Okoye gives him a dubious look. He stands] I'm okay. I'm okay.
James Rhodes: I got two heat signatures breaking through the tree line.
[The heat signatures are Proxima Midnight and Cull Obsidian] [The carrier pilots swerve into U-turns, causing their craft to tilt and allowing the practiced soldiers to slide over one side into a run, never coming to a complete halt. A Dora Milaje shouts a command nearby as the last Wakandans join ranks.] Jabari Warriors: MAYEFA YA HU! MAYEFA YA HU! MAYEFA YA HU!
MAYEFA YA HU! MAYEFA YA HU! [M'Baku, Lord of the Jabari, rallies his soldiers with a war chant. He stops as T'Challa nears him] T'Challa: [clasps wrists with M'Baku] Thank you for standing with us.
M'Baku: [translated from Xhosa] Of course, brother.
[T'Challa, Cap, and Black Widow walk to the edge of the barrier, where Proxima Midnight and Cull Obsidian stand. Proxima tests the strength of the barrier by drawing her sword across it consideringly.]
Natasha Romanoff: Where's your other friend?
Proxima Midnight: You will pay for his life with yours. Thanos will have that stone.
Steve Rogers: That's not gonna happen.
 
T'Challa: You are in Wakanda now. Thanos will have nothing but dust and blood.
Proxima Midnight: We... have blood to spare. [She brandishes her sword with a snarl, and the ships behind her start raising their outer hulls to allow their "passengers" to disembark.]
[The three heroes return to the massed forces]
Bucky Barnes: [a touch sardonically] Did they surrender?
Steve Rogers: Not exactly.
[T'Challa leads the Wakandans in the war cry "Yibambe!" telling them to hold fast as the Outriders bound toward the barrier; Proxima drops her sword arm down in the signal to attack.] Bucky Barnes: [flatly, astonished at the numbers of
Outriders] What the hell.
Natasha Romanoff: Looks like we pissed her off.
Okoye: [horrified, as the Outriders bombard the forcefield, squeezing limbs and bodies partly through only to be bisected] They're killing themselves.
[As a few Outriders managed to squeeze through intact, the Border Tribe take a knee and raise their shields. The Kingsguard behind them level their sonic spears over their comrades' shoulders, and on T'Challa's command, fire at the approaching monsters. The Winter Soldier uses his M249 machine gun, and Bruce fires the Hulkbuster's hand repulsors.]
Sam Wilson: [Sending Redwings into the fight as he flies, swooping to fire at them with his Steyr pistols] You seen the teeth on those things?
James Rhodes: Alright, back up, Sam. You're gonna get your wings singed. [He flies over the heaviest concentration of Outriders and drops a barrage of mines, all exploding fantastically.] [Everyone notices a pack of Outriders starting to run around the forcefield to the right of the defenders' position]
 
Bruce Banner: Cap, if these things circle the perimeter and get in behind us...There's nothing between them and Vision.
Steve Rogers: [grimly] Them we better keep 'em in front of us.
Okoye: [to T'Challa] How do we do that?
T'Challa: We open the barrier. [Putting his comm to his mouth] On my signal, open North-West Section Seventeen.
Dome Control: Requesting confirmation, my King. You said open the barrier?
T'Challa: On my signal.
M'Baku: [to Okoye] This will be the end of Wakanda.
Okoye: Then it will be the noblest ending in history. [Captain America readies one of his vibranium hand guards. T'Challa shouts a command in Xhosa; the Border Tribesmen disengage their shields and stand, as T'Challa walks out in front of them, never taking his eyes off the enemy.]
T'Challa: WAKANDA FOREVER! [He crosses his arms in the Wakandan salute and closes his Black Panther helmet, charging for the barrier. The heroes and leaders are at the fore of the charge.
Halfway to the barrier, the Black Panther shouts into his comm] Now!
[The Outriders pour through, distracted from trying to find any other access. The Black Panther and Captain America pull ahead rapidly due to their enhancements, and literally leap into battle.]
T'Challa: [over his comm] How much longer, Shuri?
Shuri: We've barely begun, brother. [a delicate and intricate construction of gold light hovers at her eye level; as she manipulates it, the waldo tools reproduce her commands on the Mind Stone itself]
T'Challa: You might want to pick up the pace.
[Simultaneously, Thor prepares to open the iris of Nidavellir.]
Thor: Allfathers, give me strength.
 
Eitri: You understand, boy? You're about to take the full force of a star. It'll kill you.
Thor: Only if I die. [takes deep breaths]
Eitri: [boggled] Yes. That's what... "killing you" means. [Thor grasps the two levers and pulls them down and towards himself, slowly opening the iris. The stream of stellar energy blasts pasts him and into the forge once again]
Eitri: Hold it! Hold it, Thor!
[Eitri watches the metal ingots melt while Thor is looking increasingly charred. Finally, Eitri is able to tip the cauldron, pouring the metal into the mold just as Thor passes out. The jet carries him into the forge, Rocket follows hastily and landing after Thor bounces limply off a structure to land on the floor. Groot finally looks up from his game at the thump Thor's body makes.]
Rocket: [Kneeling over Thor] Thor! Say something. Come on. Thor, you okay? [Thor looks far from "okay".]
[Eitri clumsily and urgently pulls the mold, still glowing red- hot, onto the floor, breaking it loose from its frame, then starts punching the mold itself with his metal fists to free the axe.]
Rocket: I think he's dying!
Eitri: He needs the axe! Where's the handle? Tree, help me find the handle!
[Stormbreaker's two sections - the hammer and the axeblade - lay glowing on the floor. Groot looks sadly at Thor, then scowls with determination. He stands, and extends his fingers towards Stormbreaker, growing them at extraordinary speed. As he twines them around the two parts, he cries out at the burning pain but does not hesitate, slamming them together and locking them permanently into one structure. He raises it above his head, and with a mighty cry, chops his extended arm with his other hand to
 
sever it at the right length.Thor's fingers twitch, and the new weapon levitates in a crackle of lightning echoed by the sparks between Thor's fingers.]
[The Avengers and Wakandans are struggling against the Outriders. Bucky goes down, and fights off Outrider fangs snapping at his head. Captain America and the Black Panther still fight side-by-side. War Machine hovers over the breach, pouring ammunition into the flood of bodies until a huge hammer
- Cull Obsidian's - knocks him out of the sky and to the ground. The Hulkbuster is dogpiled and pinned.]
Bruce Banner: There’s too many of them! GYAH! AAAAHHHHH! [Suddenly, a large beam of rainbow-hued light lands in the middle of the action, and an axe flies out of it, wreathed with lightning and tearing through the Outriders, freeing the heroes. It flies back to the light and into its master's hand just as the beam cuts out, revealing Thor, Groot and Rocket, (the Avengers theme swelling triumphantly at their arrival), who chambers a round in his large gun. Black Widow, Captain America and Black Panther pause in astonishment. Proxima Midnight and Cull Obsidian pause in apprehension.]
Bruce Banner: [opening the Hulkbuster's helm and laughing with joy] AH-hahaha! You guys are so screwed now!
Thor: BRING ME THANOS!!! [he charges toward the hordes of Outriders, followed by Groot and Rocket, lightning gathering around him until he finally launches himself into the air, lands in the densest concentration of Outriders and makes a crater where they had stood.]
[Cut to Titan, where Thanos arrives, finding only fresh debris from Ebony Maw's ship]
Doctor Strange: [sitting on what may have been plaza steps once] Oh, yeah, you're much more of a "Thanos".
 
Thanos: I take it the Maw is dead. This day extracts a heavy toll. Still, he accomplished his mission.
Doctor Strange: You may regret that. He brought you face-to-face with the Master of the Mystic Arts.
Thanos: And where do you think he brought you? [Star-Lord crouches behind wreckage with his weapon ready, behind Thanos and to his left; Spider-Man peeks from above and behind Doctor Strange]
Doctor Strange: Let me guess. Your home?
Thanos: [Smiling reminiscently] It was. And it was
beautiful. [Thanos curls his gauntleted fist and activates the Reality Stone to show Strange Titan before it was destroyed - green lawns, intact buildings, water-filled ponds, strolling citizens, the jack-like structures hovering and connected to the ground-based buildings with beams of energy] Titan was like most planets. Too many mouths, and not enough to go around. And when we faced extinction, I offered a solution.
Doctor Strange: Genocide.
Thanos: But at random, dispassionate, fair to rich and poor alike. They called me a madman. And what I predicted came to pass. [he relaxes his fist; the Stone stops glowing and the illusion fades back into the true state of Titan]
Doctor Strange: [sarcastically] Congratulations. You're a prophet.
Thanos: I'm a survivor.
Doctor Strange: Who wants to murder trillions.
Thanos: With all six stones, I could simply snap my fingers, and they would all cease to exist. I call that...mercy.
Doctor Strange: [stands] And then what?
Thanos: I finally rest... and watch the sun rise on a grateful universe. The hardest choices require the strongest wills.
 
Doctor Strange: [he summons his Mandalas, entering a fighting pose] I think... you'll find... our will... equal to yours.
Thanos: Ours? [he looks up to a see a chunk of wreckage descending rapidly on him, too rapidly to react -- and powered by Iron Man. He is subsequently crushed by it.]
Tony Stark: [flying in] Piece of cake, Quill.
Peter Quill: [triggers his mask and follows] Yeah, if your goal was to piss him off!
[The wreckage on top of Thanos erupts in purple, as he bellows in rage. He turns the hovering fragments into a flock of bats with the Reality Stone and swarms Iron Man with them, driving him back through the ruins.]
[Spider-Man webs his eyes, and swings in to kick him in the face at the same time that Drax leaps from cover, blades in both hands, to knee-slide behind Thanos and try for a tendon slide across the back of the Titan's knee]
[Strange jumps through a portal and summons a sword of golden energy, duelling with Thanos while Drax attacks similarly on his other side. Thanos punches Drax through a ruined wall, then shatters the blade with one hand and tears the web from his eyes. He advances on Strange and kicks at him, but Strange's shield absorbs the damage - the Cloak lifts him free of the ground.]
[Star-Lord has been making his way back on the ground, and shoots Thanos from behind. Thanos uses the Power Stone to shoot balls of energy at Star-Lord while Star-Lord leaps towards Thanos using magical platforms thrown in his path by Strange, the last one placed above Thanos's head so Star-Lord can flip over him and slap a mine on Thanos's back. Star-Lord sticks his landing, he disengages his helmet, flips Thanos a bird and falls backward into a portal].
Peter Quill: Boom!
 
[The explosion knocks Thanos to his knees and dazes him briefly] Strange: [whispers to the Cloak of Levitation] Do not let him close his fist. [the Cloak swoops off Strange's shoulders and wraps itself tightly around Thanos's armored hand, who starts tugging at this unexpected wrapping.]
[Strange starts throwing portals everywhere. Spider-Man leaps through one on Thanos's left]
Peter Parker: Magic! [He punches Thanos in the head and vanishes through a portal to the lower right before reappearing above Thanos] More magic! [He yanks Thanos's head down hard, then leaps into a portal in front of him. He leaps through another portal high and behind Thanos] Magic with a kick! [Delivers a flying kick and falls feet-first into an exit, then appears on his right] Magic with a-
[Before he can finish Thanos turns, grabbing him from the air, and throwing him to the ground, with his hand around his neck.] Thanos: Insect!
[He then throws him at Strange, knocking them both down. Thanos finally tears the Cloak away and is then promptly surrounded by fiery explosions as Iron Man bombards him. He sucks all the flame into the gauntlet with the Power Stone and fires it in a stream at Iron Man, hitting him dead on and sending him far away, plowing through a massive fallen machine.]
[Spider-Man leaps from behind, more conventionally this time, while Thanos concentrates his fire on Iron Man, webs the gauntlet and drops down in front of him, pulling hard -- but Thanos yanks on the webline, pulling the much lighter teenager towards him, and punching him on his way past. He tears the webbing free of the gauntlet just in time for a small spaceship to attempt to crash-land on him.]
[The ship drags Thanos along for a distance, burying him under debris. He stands just as the pilot leaps in a great arc to
 
punch him, landing in front of him with an energy-blade at the ready.]
Thanos: Well, well.
Nebula: You should have killed me.
Thanos: Would've been a waste of parts!
Nebula: [she runs at Thanos, attacking him with her sword] Where's Gamora?!
[Thanos punches her away. Strange uses the Crimson Bands of Cyttorak to pinion the gauntlet, pulling Thanos's fingers open and trying to pry the gauntlet off his hand.]
[Thanos tries to pull free, as Drax slides in from his right, kicking his knee and knocking him off-balance, then wrapping himself around Thanos's kneeling leg]
[Star-Lord shoots a electric trap onto the ground to Thanos's right, the tangle-field holding down his unarmored hand.] [Spider-Man swings in, webs Thanos's chest then wraps it around behind him, digging his Iron Spider legs into the ground to anchor himself.]
[Strange opens a portal straight above Thanos's out of which drops Mantis, landing on the Titan's shoulders, her hands on his temples. He bellows as she tries to put him under.]
[Iron Man, having returned, is pulling on the gauntlet. Strange reapplies the Crimson Bands of Cyttorak to reinforce the trap's hold on Thanos's right hand, and the Cloak helps him pull.
Thanos is finally subdued enough to incapacitation, not fully asleep.]
Tony Stark: [while pulling] Is he under? Don't let up.
Mantis: [starting to cry] Be quick. He is very strong.
Tony Stark: Parker, help! Get over here. [Spider-Man drops his webline, and hurries to help Tony with the gauntlet] She can't hold him much longer. Let's go.
 
Peter Quill: [flies over to join the others, stands in front of Thanos, tauntingly.] I thought you'd be harder to catch. For the record, this was my plan. Not so strong now, huh? Where is Gamora?
Thanos: My... Gamora...?
Peter Quill: No, bullshit. Where is she?
Mantis: [shocked] He is in anguish.
Peter Quill: Good.
Mantis: [crying] He… he… mourns.
Drax: What does this monster have to mourn?!
Nebula: Gamora.
Peter Quill: [pause] What?
Nebula: [realising with horror and sadness what has happened.] He took her to Vormir. He came back with the Soul Stone... but she didn't.
Tony Stark: [grasps the danger immediately and dehelmets] Okay, Quill, you gotta cool it right now, you understand?
[Quill slowly turns to Thanos]
Tony Stark: [shouting his pleads desperately] Don't, don't, don't engage, we've almost got this off!
Peter Quill: Tell me she's lying. [enraged] ASSHOLE! Tell me you didn't do it!
Thanos: I... had... to.
Peter Quill: [while starting to tear up; quietly] [while starting to tear up; quietly] No, you didn't…! No, you didn't…! [he continues to rage and then pistol-whipping Thanos twice in the face, causing Mantis to let go in pain] [he
continues to rage and then proceeds to pistol-whipping Thanos in the face] NO, YOU DIDN'T!!!
Tony Stark and Drax: Quill!
[Iron Man leaps for Star-Lord's arm, rehelmeting and leaving Spider-Man to pull off the gauntlet]
 
Tony Stark: [to the struggling Quill] Hey, stop! Hey, stop! Stop! Hey, stop! Stop!
Peter Parker: It's coming! It's coming! It's coming! [getting the fingers completely loose] I got it! I got it...!
[But Thanos wakes completely, and now well and truly furious. He head-butts Mantis, grabbing the cuff of the gauntlet just as it is sliding off his hand, causing Spider-Man to stumble back, and then throwing Mantis away off his shoulders.]
Peter Parker: [seeing Mantis with far too much air under
her] Oh, God. [he jumps and wraps his arms and legs around her, extending his spider legs to form a roll cage for a safe landing]
[Thanos kicks Drax off his right leg and into Nebula and Star- Lord, knocking them down. He yanks on the Crimson Bands holding his right hand to throw Doctor Strange well away, and swats away Iron Man and his repulsor shots. The Guardians jump up and charge him again, but he fires a pulse of indigo energy at them that knocks the three of them completely unconscious.]
[Iron Man zooms back in, his nanite arm cannon manifested, and is head-butted to the ground. Thanos looks at him for a beat, then raises the gauntlet towards Titan's moon. Iron Man stares, aghast. Thanos uses a combination of the Power and Space Stones to shatter the moon's surface, then bring the debris down on the field of battle at speed. Iron Man powers out of the way but is caught by a chunk of moon about the size of a baseball field, slamming him into the ground. The Guardians go sailing into the air from the rebound.]
[Back in Wakanda, Shuri is working steadily to complete the Mind Stone's removal; Wanda stands by tensely]
[The Kingsguard, Borderers and Jabari have little success going against Cull Obsidian's chained hammer - he either sends them flying or punches them into the ground. The Black Panther gets
 
free of his other sorties, leaps and uses all his collected kinetic energy behind a punch that lays Obsidian flat.] Rocket: [having found a clear spot] Come and get some, space dogs! [Another wave of Outriders heads right for the raccoon- oid. Bucky, having come up behind Rocket, grabs him with his
mechanical arm, holds him at arms length and spins 540 degrees, firing his own M249 at the same time.] Come on, get some, get some! Come on, get some! [Bucky drops Rocket, who looks up at him with an impressed gleam] How much for the gun?
Bucky Barnes: [snaps off another burst] Not for sale.
Rocket: Okay, how much for the arm? [Bucky just gives him a look and moves off] Oh, I'll get that arm.
[The tides of battle cause Thor, using Stormbreaker to great effect, and Captain America together. They take a breather.] Steve Rogers: [panting] New haircut?
Thor: [grinning] Notice you've copied my beard.
[Cap nods, wearily gesturing at his own face with a shield- covered hand. Groot skewers three Outriders with his right arm.] Thor: By the way, this is a friend of mine. Tree. [gestures towards Groot with Stormbreaker]
Groot: [in full battle snarl] I am GROOT!
Steve Rogers: [formally, but bemused] I... I am Steve Rogers. [In Shuri's lab, a deep rumbling can be heard even at their height. Wanda looks down on the battlefield, and sees movement through the blazing forest between the troopships and the dome. When the disturbance reaches the edge of the trees, it turns into vast moving mounds of earth that easily bypass the force field and emerge -- Threshers, sets of massive, motorized spiked wheels, intended for nothing more than shredding everything in their paths.]
T'Challa: Fall back! Fall back now!
 
[Wanda watches as at least one set of Threshers separates into individual wheels and starts veering all over the battlefield, and then looks anxiously back at Vision]
James Rhodes: Focus that fire on the left flank, Sam.
Sam Wilson: I'm doing it. [the two fliers use their firepower to crack a Thresher but cannot find a weak spot]
[Black Widow with her escrima sticks and Okoye with her augmented spear have drifted together when they're suddenly in the path of a Thresher. Both women cringe at their seemingly inevitable shredding when Wanda lands in front of both of them, eyes glowing red, lifting the whole Thresher well clear of the ground. Looking behind her, the friendly forces have scattered and replaced by a charging mob of Outriders -- the perfect place to throw a Thresher. Black Widow straightens with a pleased smile, Okoye with an amazed look.]
Okoye: [a touch indignant] Why was she up there all this time?
[The Children of Thanos help answer that question.]
Proxima Midnight: She's on the field. Take it.
[Corvus Glaive kills one of the guards just outside the lab, alerting Shuri to the problem. She starts hastily disconnecting her equipment from Vision's systems; he gasps at the sensations. The Dora Milaje engages Glaive but is sent skidding across the floor. Shuri finishes her shutdown, grabs one of her sonic panther-paws and fires at Glaive. The Dora attacks again, and Glaive sends both her and Shuri through the balcony railing and onto the main lab floor.]
[Vision is not where Corvus Glaive expects to find him. Vision is, in fact, charging at him and knocking him out the window to fall many meters down the face of Mount Bashenga]
Sam Wilson: Guys, we got a Vision situation here. [he's tackled by a leaping Outrider and grounded.]
Steve Rogers: Somebody get to Vision!
 
Bruce Banner: I got him! [Bruce has figured out the Hulkbusters repulsor thrusters and makes a beeline for the android.]
Wanda Maximoff: On my way. [she is clobbered by Proxima Midnight's pommel and rolls down into the large ditch from the Thresher before she can move.]
Proxima Midnight: [jumping down next to Wanda] He'll die alone. As will you.
Natasha Romanoff: She's not alone.
[Okoye silently brandishes her spear on the other side of Proxima and nods at Black Widow]
Proxima Midnight: Euuyaaah! [she leaps for Black Widow, who has joined her sticks into a full staff. She blocks Proxima's blow with an electrical crackle while Okoye runs around the slope to also attack from the front.]
[Corvus Glaive kicks Vision, knocking him down; as he attempts to rise again, Cull Obsidian shows up and swings his hammer in a full arc, throwing Vision even further. He painfully starts to climb to his feet again when a whooshing overhead interrupts the fight as Bruce Banner lands the Hulkbuster between the aliens and the android. He takes a defensive stance, pointing one hand's repulsor at each.]
Bruce Banner: Ohh no, oh no you don't. This isn't going to be like New York, pal. This suit's already kicked the crap out of the Hulk- [Cull Obsidian jumps forward, grabs Bruce's right arm and Bruce in reflex grabs Obsidian's hammer; a jet fires, taking the two of them in a random direction, to the base of a waterfall.]
Bruce Banner: Guys! Vision needs backup now! [Obsidian pulls the Hulkbuster up and kicks it in the small of the back][trying to change into the Hulk while fighting Cull Obsidian in the Hulkbuster armor] Hulk. Hulk, I know you like making your entrance at the last second, well, this is it, man. This is the
 
last, last second. [Bruce extends his left hand protectively; Obsidian grabs the armor's hand, chops the shoulder joint with a relatively small axe then does a roll over Bruce's back to leverage snapping off the Hulkbuster's whole arm] Ahhhhh!
Hulk! Hulk! HULK!
Hulk: [Banner's face briefly becomes the Hulk] NOOOO!!!
Bruce Banner: Oh, screw you, you big green asshole! I'll do it myself! [to Obsidian] Come on!
[He charges the alien, jumps into the air and delivers an effective punch with his remaining hand - swat, punch, hammer - except that blow is caught by Obsidian, who punches back, knocking Bruce flat. Obsidian changes his left hand armor into a pointed weapon, and lunges forward to deliver a likely fatal blow, when Bruce grabs the detached Hulkbuster arm out of the water, holding it so Obsidian impales that instead, and slaps the controls.]
Bruce Banner: See ya! [the repulsors fire, taking Cull Obsidian high into the air - high enough, in fact, to intersect the defense dome. The Hulkbuster arm drags Obsidian against the field to grotesque destructive effect, ending in a very final explosion.] Hulk, we got a lot to figure out, pal.
[Proxima Midnight alternates heavy blows between her two opponents, but all three of them duck as a single-wheel Thresher tears overhead, the ditch sparing them most of the danger from the wheel-blades. Proxima uses the distraction to kick Black Widow in the face, sending her to the ground. She then grabs Okoye by the shoulder and weapon and throws her meters away.] [Simultaneously, Corvus Glaive and Vision struggle in the forest at the foot of Mount Bashenga. Glaive grasps Vision's shoulder and uses the leverage to plunge his blade once more into the android's chest.]
 
Corvus Glaive: I thought you were formidable, machine. But you're dying, like any man. [he yanks his blade out, and Vision collapses. As he bends over his fallen opponent to retrieve the Stone, he's tackled by Captain America at full speed]
Steve Rogers: Get outta here! [he exchanges blows with Glaive, using his arm-shields as offence as well as defence, then turns to Vision again] GO!
[Black Widow splits her staff back into a pair of sticks to block Proxima Midnight's swordblows, and finally knocks it from her hand. The alien takes to her bare fists instead, knocks down and pins the Black Widow. Proxima triggers an arm-blade from her left-arm armor, and stabs at Widow, who barely manages to block the blade with her crossed sticks. As the edge starts to dig into Black Widow's neck anyway, scarlet energy grabs the alien and tosses her into the air right into the path of another passing Thresher. Dark blue blood spatters the women below.
Wanda sits up, sighing with relief, her hands still shimmering.]
Natasha Romanoff: That was really gross.
[Captain America keeps blocking Corvus Glaive's staff weapon using his shields, finally knocking it from the alien's hands just before he's thrown over a fallen tree and pinned, Glaive's hand at his throat. Even with his physical abilities, Cap's struggling -- until a glaive-blade pierces Glaive's chest, and is pushed all the way through. Vision raises his enemy in a perfect mirror of the first attack on him, and holds him for a moment, before dropping Glaive's corpse to one side and collapsing exhaustively.]
Steve Rogers: [helping him back up] I thought I told you to go.
Vision: We don't trade lives, Captain.
[The Guardians and Avengers are dealing with the gravitic aftermath of dumping a large chunk of moon onto an unstable planet's surface. The unconscious Guardians are flying upwards
 
uncontrollably, moon-chunks are still making fiery ballistic inbounds, and random debris and massive rocks are floating in any possible direction. Spider-Man is well-equipped to handle this physically, even if he's freaking out emotionally.]
Peter Parker: [webs Mantis] I got you! I got you! [snags Drax, securing both of them to something Not Moving] I'm sorry I can't remember anybody's names! [reels in Star-Lord]
[The Cloak of Levitation sets Doctor Strange down on a relatively stable outcrop as Thanos extricates himself from rubble. The Sorcerer Supreme makes a few passes with his hands, producing the familiar golden magic filigree circles, and slams his hands down on the rock before him, invoking the Seven Suns of Cinnibus as a lightning-like effect of immense heat jumping from rock to rock until it reaches Thanos, sending him flying - but he makes use of the erratic gravity to keep control and fire back a blast from the Power Stone.]
[Strange blocks the purple plume with a wall of Mirror Dimension, which he then pushes back at Thanos. It shatters around the Titan, who suctions the magic into a miniature black hole with the Space Stone, volleying it back at Strange. Just in time, Strange raises a shield and changes the dark energy into a swarm of aqua butterflies which return to their master.]
[Before Thanos can counterattack again, Strange levitates and invokes the Images of Ikonn, giving him arms like a Hindu diety before dozens of Strange replications rush away, forming a circular wall around a snarling Thanos. They call cast magical cords, wrapping around Thanos's torso, arms and hands; he struggles to close his gauntleted fist, and uses the Soul and Power Stones to discover the real Strange among the many copies, blowing the duplicates away and sending the singular Strange reeling. Reality and Space pull Strange forward, Thanos grasping
 
him by the throat once in range. Strange grabs futilely at Thanos's hand.]
Thanos: You're full of tricks, wizard.
Doctor Strange: [as Thanos reaches for the Eye of Agamotto] No! Thanos: [he snaps the Eye off its chain] Yet you never once used your greatest weapon. [he crushes it in his bare hand]A
fake. [he throws Strange hard enough that Strange's head hits stone and he passes out]
[Almost simultaneously, a red and gold device slaps into the palm of the Infinity Gauntlet, bracing the fingers open; and a red and gold Avenger makes a fast and hard entrance.]
Tony Stark: [sounding just about done with the Titan] You throw another moon at me, and I'm gonna to lose it.
Thanos: Stark.
Tony Stark: You know me?
Thanos: I do. You're not the only one cursed with knowledge. Tony Stark: My only curse is you. [small rockets pop out of Iron Man's back and launch at Thanos]
Thanos: Come on!
[The rockets all explode on target, momentarily shrouding Thanos in smoke. Before it clears, Iron Man piledrives into Thanos horizontally, using his single super-jet boot configuration. As he bounces off, he flips and sticks his landing, immediately reconfiguring his boots into ground clamps for stability and his gloves into rocket-driven battering rams, punching Thanos into a ruined wall behind him.]
[Thanos shakes it off quickly, reaches forward and tears Iron Man's helmet off, revealing Tony's surprised expression before the suit recovers automatically and re-forms his head protection. The Titan makes use of the fractional delay and punches back hard, sending Iron Man sliding meters away, giving Thanos time to rip the brace device off the gauntlet. He
 
immediately uses the Power Stone to stream furiously lambent energy at his opponent, who forms a shield to kneel behind just as instantly, getting pushed back even further by the incredible force.]
[Iron Man slides out from behind the shield, letting the angled energy push him away for a faster start, and whips back to Thanos full thrusters; he kicks at the Titan with his left foot, turning the boot into a ground clamp at the same time to pin the gauntlet, and keeps twisting while his left glove becomes a ram again, slamming into Thanos's face, cutting his cheek.]
Thanos: [panting] All that for a drop of blood.
[He smiles briefly punches Iron Man, sending him pinwheeling, then starts beating him with his fists. Tony attempts to block the blows with his forearms, but Thanos is relentless, picking him up by the helmet and blasting his midsection with the Power Stone. The gaps in nanite coverage are now gaping, as the armor loses the ability to recover from the intensity and extent of the damage. Iron Man lands hard from the Power blast, struggles to one knee and fires his right hand repulsor at the inexorable Thanos; the beam is easily deflected by the gauntlet. He gets to both feet as the suit tries to complete repairs, adding the beam from his left hand as well. Thanos walks right up to him, and backhands the incomplete helmet completely off Tony's head. He crosses his arms to block a blow from Thanos's gauntlet, and has his left hand caught over his head. In desperation, he forms what's left of his right glove into a shortsword, which is also easily caught by Thanos, snapping it off clean and driving it through Iron Man's left side. The fight is over.]
[Thanos walks Iron Man back until he sits, and places the gauntlet almost comfortingly on Tony's head.]
 
Thanos: You have my respect, Stark. When I'm done, half of humanity will still be alive. [he lets go, straightens and steps back] I hope they remember you.
[Iron Man's just a little distracted with the pain, and blood drooling out of his mouth, and compromised breathing.]
[Thanos raises the gauntlet, closing his fist, all four Stones glowing]
Doctor Strange: Stop! [sitting up and sounding entirely damaged] Spare his life... and I will give you the stone.
Thanos: No tricks. [Strange shakes his head as Thanos points all four Stones at him instead]
Tony Stark: Don't..!
[Strange reaches up and plucks the Time Stone out of its hiding place in the stars. He opens his hand, the scars on his fingers and their inherent trembling particularly obvious now, and the Stone floats to Thanos's bare hand. Strange watches him intently, as he takes the Stone and drops it into the thumb setting, the energy pulse making the Titan wince.]
Thanos: One to go. [an energy blast hits the gauntlet right in the empty Mind Stone setting, and Thanos grimaces in surprise] Peter Quill: [screaming in incoherent rage, helmet up, firing with both hands and flying straight for Thanos]
[Thanos doesn't even bother responding to the assault - he just leaves. Star-Lord flies through where Thanos had been and crashes, rolling several times]
Peter Quill: [standing and dehelmeting] Where is he?!
[Iron Man stitches up his stab wound as well as he can with his suit functions; he has no breath for answers]
Peter Quill: [now fearful instead of furious] Did we just lose? Tony Stark: [to Strange, sadly, who has given the Time Stone to Thanos] Why would you do that?
Doctor Strange: We're in the Endgame now.
 
[M'Baka bashes another Outrider - the ground game has improved considerably with the addition of the God of Thunder. His tribesmen are equally successful around him.]
M'Baku: MAYEFA!
Jabari: YA HU!
[Thor is in the air, using Stormbringer on the Outrider drop ships which are now retreating. He is having considerably more success than the Wakandan Dragon fliers firing on the fleeing ships.]
Wanda Maximoff: [landing as she finally locates Vision] Are you okay? [Vision flinches in pain before he can answer]What? What is it?
Vision: He's here.
[The wind picks up. It feels... strange. Eerie.]
Steve Rogers: Everyone, on my position. We have incoming. [he is joined by the Black Widow, Falcon, Okoye and the Black Panther in short order.]
Natasha Romanoff: What the hell?
Bruce Banner: [Bruce sees the blue-black clouds of a Space Stone relocation just before Thanos steps forward, and confirms this isn't just another member of the Black Order] Cap. That's him.
Steve Rogers: Eyes up. Stay sharp.
[Bruce reaches Thanos first, lunging forward fist-first - but Thanos uses the Space Stone on him, renders him immaterial until the Hulkbuster is half-buried in the stone of the cliff behind him, and freezes Bruce in place.]
[Captain America is sent flying by purple energy before he even gets to strike a single blow]
[The Black Panther, armor fully charged kinetically, leaps high and with claws extended, but is easily grabbed by the throat and punched to the ground, his armor discharging violently]
 
[Falcon stoops, strafing with both Steyr pistols, but is felled when his wings become rubbery and unable to sustain flight.] Vision: Wanda. It's time.
Wanda Maximoff: No.
Vision: They can't stop him, Wanda, but we can. Look at me. You have the power to destroy the stone.
Wanda Maximoff: Don't.
Vision: You must do it. Wanda, please. We. Are. Out of time.
Wanda Maximoff: I can't.
Vision: Yes, you can. You can. If he gets the stone, half the universe dies.
Wanda Maximoff: It's not fair.
Vision: It shouldn't be you, but it is. It's all right. You could never hurt me. I just... feel you. [Wanda extends a trembling hand and starts beaming her energy at the Mind Stone.] [The following action is mostly muted. War Machine joins the fight, firing his guns at Thanos until he uses the gauntlet to crush his armor around him and toss him aside.]
[Bucky runs in firing, and is punched away by the Power Stone.] [Okoye activates the vibranium-powered elements on her spear and flings it; Power stops it inches from Thanos, and throws her and it aside while wrapping the Black Widow in unescapable bands of earth.]
[Groot stabs his hands into the ground to wrap Thanos in cables of roots, which he breaks easily.]
[Wanda watches all this over one shoulder, and turns back to Vision to add her left hand to her tearful effort.]
[Captain America slides under one blow and comes up swinging his deployed arm-shields, punching Thanos in the gut and chin. He grabs the gauntlet, keeping Thanos's fingers unclenched. Thanos looks very briefly impressed at Cap's efforts as he screams
 
before slamming a fist into his head and rendering him insensible]
[Wanda looks over her shoulder again and sees Thanos approaching unopposed. She swings her left hand around to fend him off with a stream of scarlet energy, and pushes him back despite his blue-purple energy shield, but then he starts to make slow headway.]
Vision: [very softly] It's all right. It's all right. I love you.
[At those words, the yellow Mind Stone finally starts to crack. Vision's face is overcome by an expression of joyful peace, and as the crystal fragments completely, a pulse of pure yellow energy explodes from him, shuddering the trees for many meters around his epicenter. Wanda's and Thanos's energy subsides.] Thanos: [walking closer to Wanda] I understand, my child. Better than anyone.
Wanda Maximoff: [snarls] You could never.
Thanos: [reaches down to presume to stroke her hair, as if in comfort] Today, I lost more than you can know. But now is no time to mourn. Now... is no time at all. [He reaches forward, clenching the gauntlet, emerald filigree surrounding his wrist, making a gesture very similar to that Doctor Strange made when activating the Eye of Agamotto. In response, a bead of yellow light starts gathering in on itself as time is reversed and growing in size, solidifying into an intact and conscious Vision]
Wanda Maximoff: No! [she lunges for Vision and is swatted away.] [Thanos picks up Vision by the throat, lifting him to eye-level, and digs the fingers of his right hand into Vision's forehead, digging out the Mind Stone. He pulls it loose, and Vision goes limp and colorless; he tosses the lifeless android aside like trash. Bringing his gauntleted hand up, he slowly moves the Mind
 
Stone over the last empty setting, and drops it in. The energy surge is much more than any previous - his torso is wreathed with iridescent static and he bellows from the sensations.] [As Thanos studies the completed gauntlet, a massive bolt of lighting strikes him, digging him into the ground and grinding
him back for meters. Thor has arrived, eyes glowing with power, stooping down from the sky like a bird of prey. The God of Thunder pauses his attack, reverses his position, raises Stormbreaker above his head and hurls it -- Thanos fires the whole might of the gauntlet against it, but it only creates a rainbow-like bowshock, not slowing the axe as it slams right into Thanos' chest. ]
Thor: [lands in front of Thanos, who is down on one knee; hatefully.] I told you. You'd die for that!
[He takes hold of the back of Thanos's head and forces Stormbreaker deeper into his chest, staring angrily into his eyes while Thanos cries out in pain]
Thanos: [weakly] You should have... You... [suddenly stronger] You should have gone for the head! [He raises his gauntlet and snaps his fingers.]
Thor: NO!
[The scene whites out. It cuts sharply to a view of Thanos his hand on his chest, no wounds visible. Thanos now seems to be inside the Soul Stone, where he sees a young Gamora and the pavilion from the home world of the Zen-Whoberi.]
Thanos: Daughter? Gamora: Did you do it? Thanos: Yes.
Gamora: [beat] What did it cost?
Thanos: [solemnly] Everything.
[Now out of the Soul World, Thanos is snapped back to normal reality, and notices the damage inflicted on the gauntlet - the
 
metal scorched and distorted from heat, the stones no longer glowing]
Thor: What'd you do? [angrily] WHAT'D YOU DO?!
[Thanos nearly seems to not notice Thor before he uses the Space Stone and teleports away, leaving Stormbreaker behind on Wakandan ground.]
Steve Rogers: [stumbles into the clearing, holding his left side] Where'd he go? Thor... where'd he go?
Bucky Barnes: Steve?
[Bucky suddenly stumbles over, and collapses into ashes, much to Steve's shock; he walks over and touches the ground where Bucky's ashes evaporated unbelievingly.]
[On the battlefield, Wakandan soldiers disintegrate to ashes, much to M'Baku's horror.]
T'Challa: [while reaching for a fallen Okoye] Up, General. Up! This is no place to die. [T'Challa holds out his hand for Okoye. But he suddenly disintegrates into ashes and an anguish Okoye falls back on the ground]
Okoye: Kumkani?!
Groot: [slowly corrodes into ashes as well by Rocket] I am Groot... [Translation: "Dad?"]
Rocket: No... no. No. No. No! Groot, no.
[Wanda is mourning over Vision. She then turns into ashes. An injured Falcon turns to ashes, hidden in the undergrowth.] James Rhodes: [searching for Falcon, missing him by only a few feet] Sam? Sam!? Where you at?!
[On Titan, the remaining members of the Guardians and Avengers collect themselves - Mantis props up Star-Lord, Spider-Man helps Tony to his feet, Drax and Nebula manage to limp over on their own.]
Mantis: Something... is... happening. [she disintegrates into ashes]
 
Drax: [to Quill as he dissolves] Quill? [Quill stares in horror]
Tony Stark: Steady, Quill.
Peter Quill: Aw, man. [Quill also gets disintegrated into ashes] Doctor Strange: [calmly turns to Stark] Tony, there was no other way. [he finally gets erased.]
Peter Parker: [realizes he's fading away] Mister Stark? I don't feel so good...
Tony Stark: [trying to be calm, his voice shaking as he looks at Peter in terror] You're all right.
Peter Parker: [stumbling and terrified] I don't know what's- I don't know what's happening. I don't- [Parker falls into Stark's arms, clutching him tight and crying] Save me, save me! I don't wanna go, I don't wanna go, sir, please. Please, I don't wanna go. I don't wanna go... I'm sorry. [Parker disintegrates into ashes in Stark's arms]
Nebula: [to Tony Stark, seeing Thanos' victory.] He did it. [Stark mourns silently at their failure it caused. Back on Wakanda, the remaining team members, Captain America, Thor, War Machine, Black Widow, Bruce Banner, and Rocket are left mourning near Vision's dead body.Captain America turns over Vision's bleached corpse as the Black Widow runs up to the other survivors]
James Rhodes: What is this? What the hell is happening?
Steve Rogers: [pause] Oh, God.
[Meanwhile, in a different place, in a rustic house on a terraced slope with a scarecrow made of discarded armor, Thanos sits down and watches the Sun rise.]

Nick Fury: Still no word from Stark?
Maria Hill: No, not yet. We're watching every satellite in both hemispheres, there's still nothing. [receives three beeps from her device]
 
Nick Fury: What is it?
Maria Hill: Multiple bogeys over Wakanda. Nick Fury: Same energy signatures as New York? Maria Hill: Ten times bigger.
Nick Fury: Tell Klein. We'll meet him at-
Maria Hill: Nick! [a car spirals out of control in front of them. They get out and Hill checks on the passengers.]
Nick Fury: They okay?
[Behind their vehicle, a motorcycle lies in the middle of the street with a concerned citizen approaching it.]
Maria Hill: There's no one here.
[They hear helicopter rotor sounds from the direction they'd come, but it sounds wrong -- a Leonardo executive helicopter, tail rotor smoking from damage already, appears and crashes nose-first into a building. Screaming intensifies. The two are now witnessing civilians around them suddenly disintegrating.] Nick Fury: Call Control. Code Red.
Maria Hill: Nick?
[Fury turns around to see Hill disintegrating.]
Nick Fury: Hill?
[Fury then races back to their car and gets a what appears to be an old pager with extra gear attached out of his bag on the back seat. He sends out an emergency alert, mere seconds before his hand turns into ashes]
Nick Fury: Oh, no. Motherf-
[Fury corrodes to dust. The pager falls to the ground, red lights blinking on the additions; the camera zooms in and we see the device display "SENDING..." then display a red-blue-and-gold star insignia -- the symbol of Captain Marvel.]

[Screen title: Thanos will return]

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)