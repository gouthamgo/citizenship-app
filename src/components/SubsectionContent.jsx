// SubsectionContent.jsx
import React from 'react';

const SubsectionContent = ({ sectionId, subsectionId }) => {
  
    // Part 1 content
    if (sectionId === 'part1') {
        if (subsectionId === 'aboriginal') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">Aboriginal and Torres Strait Islander peoples</h3>
              <p className="mb-4">
                Australia's first inhabitants are the Aboriginal and Torres Strait Islander peoples, who have the oldest continuous 
                cultures and traditions in the world.
              </p>
              <p className="mb-4">
                Historically, Aboriginal people are from mainland Australia and Tasmania. The archaeological record indicates 
                that Aboriginal peoples arrived in Australia between 65,000 and 40,000 years ago; however, the Aboriginal 
                peoples believe they are central to the creation stories of this land, and their creation stories commence with the 
                beginning of time. Torres Strait Islander people are from islands between the northern tip of Queensland and 
                Papua New Guinea.
              </p>
              <p className="mb-4">
                Aboriginal and Torres Strait Islander peoples have age-old beliefs and traditions that still guide them today. 
                They have a deep connection with the land, which is expressed in their stories, art and dance. Indigenous cultures 
                are diverse and an important part of Australia's national identity.
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'european') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">Early days of European settlement</h3>
              <p className="mb-4">
                European settlement started when the first 11 convict ships, which became known as the 'First Fleet', arrived from 
                Great Britain on 26 January 1788.
              </p>
              <p className="mb-4">
                At this time British laws were harsh and the jails could not hold the large number of people imprisoned for their 
                crimes. To manage this problem, the British Government decided to transport convicts to the other side of the 
                world: to the new colony of New South Wales.
              </p>
              <p className="mb-4">
                The first Governor of the colony of New South Wales was Captain Arthur Phillip. The colony survived, and as more 
                convicts and free settlers arrived, it grew and developed. More colonies were established in other parts of Australia.
              </p>
              <p className="mb-4">
                Early free settlers came from Great Britain and Ireland. This British and Irish heritage has had a major influence on 
                Australia's recent history, culture and politics.
              </p>
              <p className="mb-4">
                In 1851, a 'gold rush' began when gold was discovered in the colonies of New South Wales and Victoria. 
                People from all around the world came to these colonies to try to make their fortunes. Chinese people arriving 
                at this time were the first large group of migrants not from Europe. In 10 years, Australia's population more 
                than doubled.
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'nation') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">The nation of Australia</h3>
              <p className="mb-4">
                In 1901, the separate colonies were united into a federation of states called the Commonwealth of 
                Australia. It was at this time that our national democratic institutions, including our national 
                parliament, government and the High Court were established under the new Australian Constitution.
              </p>
              <p className="mb-4">
                In 1901, Australia's population was about four million. This number did not include Aboriginal and Torres 
                Strait Islander peoples, as it was not until after a Referendum in 1967 that they were included in 
                official estimates of the Australian population.
              </p>
              <p className="mb-4">
                Throughout the first half of the 20th century, migration levels rose and fell. There were programs 
                to actively encourage British migrants to settle here, and many did.
              </p>
              <p className="mb-4">
                A wave of non-British migration came after World War II, when millions of people in Europe 
                had to leave their homelands. Large numbers of Europeans came to Australia to build a new life.
              </p>
              <p className="mb-4">
                In recent years, our migration and refugee programs have brought people to Australia from all over the 
                world. People have come here to join family, to make a new life, or to escape poverty, war or persecution.
              </p>
              <p className="mb-4">
                The diversity of Australia's population has increased over the last two centuries. This diverse 
                and prosperous society enhances Australia's connection to the world.
              </p>
              <p className="mb-4">
                Australia's national language is English. It is part of our national identity. In keeping with Australian 
                values, migrants should learn and use English to help them participate in Australian society.
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'states') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">Australia's states and territories</h3>
              <p className="mb-4">
                The Commonwealth of Australia is a federation of states and territories. There are six states and two mainland 
                territories. Canberra is Australia's capital city, and each state and mainland territory has its own capital.
              </p>
              <p className="mb-4">
                <strong>New South Wales (NSW)</strong> was the first colony established by the British. Sydney is the capital 
                city of New South Wales and is the nation's largest city. The Sydney Harbour Bridge and Opera House are national icons.
              </p>
              <p className="mb-4">
                <strong>Victoria (VIC)</strong> is the smallest of the mainland states. Victoria's capital city is Melbourne. 
                Many fine buildings in Victoria were built from the wealth created by the gold rush of the 1850s.
              </p>
              <p className="mb-4">
                <strong>Queensland (QLD)</strong> is the second largest state. Queensland's capital city is Brisbane. 
                The Torres Strait Islands lie to the north of the state and the world-famous Great Barrier Reef runs along its eastern coast.
              </p>
              <p className="mb-4">
                <strong>Western Australia (WA)</strong> is the largest state. Perth is the capital city of Western Australia. 
                The east of the state is mostly desert, while the south-west is a rich agricultural and wine-growing area.
              </p>
              <p className="mb-4">
                <strong>South Australia (SA)</strong> has a rugged coastline and many famous wine regions. Adelaide, 
                the capital city, has many examples of fine colonial architecture.
              </p>
              <p className="mb-4">
                <strong>Tasmania (TAS)</strong> is the smallest state, separated from the mainland by the Bass Strait. 
                Tasmania's capital city is Hobart. Much of the island has unspoilt wilderness landscapes.
              </p>
              <p className="mb-4">
                <strong>The Australian Capital Territory (ACT)</strong> is located between Sydney and Melbourne. 
                It is home to the nation's capital city, Canberra. Several national institutions are located in Canberra.
              </p>
              <p className="mb-4">
                <strong>The Northern Territory (NT)</strong> has a tropical environment in the north of the state and 
                dry red desert in the south. Darwin is the capital city.
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'traditions') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">Traditions</h3>
              <p className="mb-4">
                <strong>Welcome to Country and Acknowledgement of Country protocols</strong>
              </p>
              <p className="mb-4">
                A Welcome to Country is a cultural practice performed by an Aboriginal or Torres Strait Islander custodian of 
                the local region, welcoming visitors to their traditional land. This was traditionally performed to ensure 
                visitors had a safe and protected journey during their time on that land.
              </p>
              <p className="mb-4">
                A Welcome to Country can take place through many forms, including songs, dances, smoking ceremonies 
                or speeches in traditional language or English.
              </p>
              <p className="mb-4">
                A Welcome to Country is usually the first item of proceedings to open an event.
              </p>
              <p className="mb-4">
                An Acknowledgement of Country is an opportunity to recognise that the gathering is on Aboriginal or 
                Torres Strait Islander land; pay respect to Traditional Custodians, particularly Elders past and present; 
                and pay respect to Aboriginal and Torres Strait Islander peoples in attendance.
              </p>
              <p className="mb-4">
                These practices are performed to show respect for Aboriginal and Torres Strait Islander peoples.
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'important-days') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">Important days for Australians</h3>
              <p className="mb-4">
                <strong>Australia Day</strong>
              </p>
              <p className="mb-4">
                On 26 January each year, we celebrate Australia Day. Australia Day is a public holiday in every state and 
                territory in Australia. It is the anniversary of the arrival of the First Fleet from Great Britain in 1788.
              </p>
              <p className="mb-4">
                On Australia Day, communities across Australia reflect on our history, and the people who have contributed to 
                our shared achievements. It is the biggest annual public holiday in Australia.
              </p>
              <p className="mb-4">
                <strong>Anzac Day</strong>
              </p>
              <p className="mb-4">
                Anzac Day is commemorated on 25 April each year. Anzac Day is named after the Australian and 
                New Zealand Army Corps, which landed at Gallipoli in Türkiye during World War I on 25 April 1915.
              </p>
              <p className="mb-4">
                Anzac Day is a solemn day when we remember the sacrifice of all Australians who served and died in 
                wars, conflicts and peacekeeping operations. We also honour the courage and commitment of all 
                servicemen and women and reflect on the many different meanings of war.
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'flags') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">Australia's flags</h3>
              <p className="mb-4">
                The Australian National Flag is the official flag of our nation. Other flags that are officially recognised and may be 
                flown in the community include the Australian Aboriginal Flag and the Torres Strait Islander Flag.
              </p>
              <p className="mb-4">
                <strong>The Australian National Flag</strong> is blue, white and red. It features:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>The Union Jack in the top left corner, representing our history of British settlement</li>
                <li>The Commonwealth Star below the Union Jack, with seven points representing the unity of the six states and territories</li>
                <li>The Southern Cross, a constellation of stars visible in the southern sky</li>
              </ul>
              <p className="mb-4">
                <strong>The Australian Aboriginal Flag</strong> is black, red and yellow:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>The top half is black, representing Aboriginal peoples</li>
                <li>The bottom half is red, representing the earth and ceremonial significance</li>
                <li>The yellow circle in the center represents the sun</li>
              </ul>
              <p className="mb-4">
                <strong>The Torres Strait Islander Flag</strong> is green, blue, black and white:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>The green stripes represent the land</li>
                <li>The blue panel represents the sea</li>
                <li>The black lines represent the Torres Strait Islander people</li>
                <li>The white dancer's headdress is a symbol for all Torres Strait Islanders</li>
                <li>The white star represents the five major island groups</li>
              </ul>
            </div>
          );
        }
        
        if (subsectionId === 'symbols') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">Australia's symbols</h3>
              <p className="mb-4">
                <strong>Commonwealth Coat of Arms</strong>
              </p>
              <p className="mb-4">
                The Commonwealth Coat of Arms is the official symbol of the Commonwealth of Australia. It represents our 
                national unity. It identifies the authority and property of the Commonwealth of Australia.
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>The shield in the centre represents the six states and federation</li>
                <li>A kangaroo and an emu support the shield on each side, both native Australian animals</li>
                <li>A gold Commonwealth Star sits above the shield</li>
                <li>The background is the golden wattle, Australia's national flower</li>
              </ul>
              <p className="mb-4">
                <strong>Australia's national flower</strong> is the golden wattle. This small tree grows mainly in south-eastern 
                Australia. It has bright green leaves and golden yellow flowers in spring.
              </p>
              <p className="mb-4">
                <strong>Australia's national colors</strong> are green and gold—the colours of the golden wattle. The uniforms of 
                our national sports teams are usually green and gold.
              </p>
              <p className="mb-4">
                <strong>Australia's national gemstone</strong> is the opal. According to Aboriginal legend, a rainbow touched 
                the earth and created the colours of the opal.
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'anthem') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">Australia's national anthem</h3>
              <p className="mb-4">
                'Advance Australia Fair' is Australia's national anthem. It is sung on occasions of national importance, 
                including at Australian citizenship ceremonies and major sporting events.
              </p>
              <div className="p-4 bg-gray-50 border rounded-md mb-4">
                <p className="font-semibold mb-2">Advance Australia Fair</p>
                <p className="italic">
                  Australians all let us rejoice,<br />
                  For we are one and free;<br />
                  We've golden soil and wealth for toil;<br />
                  Our home is girt by sea;<br />
                  Our land abounds in nature's gifts<br />
                  Of beauty rich and rare;<br />
                  In history's page, let every stage<br />
                  Advance Australia Fair.<br />
                  In joyful strains then let us sing,<br />
                  Advance Australia Fair.
                </p>
                <p className="italic mt-4">
                  Beneath our radiant Southern Cross<br />
                  We'll toil with hearts and hands;<br />
                  To make this Commonwealth of ours<br />
                  Renowned of all the lands;<br />
                  For those who've come across the seas<br />
                  We've boundless plains to share;<br />
                  With courage let us all combine<br />
                  To Advance Australia Fair.<br />
                  In joyful strains then let us sing,<br />
                  Advance Australia Fair.
                </p>
              </div>
            </div>
          );
        }
      }
      
      // Part 2 content
      if (sectionId === 'part2') {
        if (subsectionId === 'democratic-beliefs') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">Our democratic beliefs</h3>
              <p className="mb-4">
                <strong>Parliamentary democracy</strong>
              </p>
              <p className="mb-4">
                Australia's system of government is a parliamentary democracy. As part of this system, the power of the government 
                comes from the Australian people because Australian citizens vote for people to represent them in parliament. 
                The representatives in parliament must answer to the people, through elections, for the decisions they make.
              </p>
              <p className="mb-4">
                <strong>The Rule of Law</strong>
              </p>
              <p className="mb-4">
                All Australians are equal under the law. The Rule of Law means that no person, group or religious rule is above the 
                law. Everyone, including people who hold positions of power in the Australian community, must obey Australia's 
                laws. This includes government, community and religious leaders, as well as business people and the police.
              </p>
              <p className="mb-4">
                <strong>Living peacefully</strong>
              </p>
              <p className="mb-4">
                Australians are proud to live in a peaceful country with a stable system of government. Australians believe that 
                change should occur through discussion, peaceful persuasion, and the democratic process. We reject violence 
                as a way to change a person's mind or the law.
              </p>
              <p className="mb-4">
                <strong>Respect for all individuals regardless of background</strong>
              </p>
              <p className="mb-4">
                Australia's democratic system is based on the principle that every individual, regardless of their background, 
                has rights and equality under Australian law. All Australians are expected to treat each other with dignity and 
                respect, regardless of their race, country of origin, gender, sexual orientation, marital status, age, disability, 
                heritage, culture, politics, wealth or religion.
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'freedoms') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">Our freedoms</h3>
              <p className="mb-4">
                <strong>Freedom of speech and freedom of expression</strong>
              </p>
              <p className="mb-4">
                Freedom of speech is a core Australian value. It allows people to say and write what they think, and to discuss 
                ideas with others. Freedom of expression allows people to express their views through art, film, music, and literature.
              </p>
              <p className="mb-4">
                However, it is against the law to promote violence against others based on characteristics such as their culture, 
                ethnicity, religion, or background. It is also illegal to make false allegations or encourage others to break the law.
              </p>
              <p className="mb-4">
                <strong>Freedom of association</strong>
              </p>
              <p className="mb-4">
                Australians are free to join or leave any legal organization, such as a political party, trade union, religious, 
                cultural, or social group. People can protest government actions and join campaigns to change laws.
              </p>
              <p className="mb-4">
                However, all protests must be within the law and peaceful. They must not injure people or damage property.
              </p>
              <p className="mb-4">
                <strong>Freedom of religion</strong>
              </p>
              <p className="mb-4">
                Australia has no official national religion. People are free to follow any religion they choose, or no religion at all.
              </p>
              <p className="mb-4">
                The government treats all citizens equally, regardless of religion. However, religious practices must not break 
                Australian laws. If there is a conflict between religious law and Australian law, Australian law prevails.
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'equalities') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">Our equalities</h3>
              <p className="mb-4">
                Australian society values equal rights and opportunities for all people.
              </p>
              <p className="mb-4">
                <strong>Gender equality</strong>
              </p>
              <p className="mb-4">
                Men and women have equal rights in Australia. It is against the law to discriminate against someone because of their gender.
              </p>
              <p className="mb-4">
                In Australia, women have the right to work in any profession or role based on their skills and abilities. They have 
                equal access to education and can serve in the military, police, and government. They are also entitled to equal pay 
                for the same work as men.
              </p>
              <p className="mb-4">
                <strong>Equality of opportunity and a 'fair go'</strong>
              </p>
              <p className="mb-4">
                Australians value the principle of a 'fair go', meaning everyone should have an equal opportunity to succeed in life, 
                regardless of their background. This means that what someone achieves should be a result of their hard work and 
                talents rather than their wealth or background.
              </p>
              <p className="mb-4">
                This ensures that there are no formal class distinctions in Australian society. People are judged on their merits 
                and contributions, not on their social status or origin.
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'responsibilities') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">Responsibilities and privileges of Australian citizenship</h3>
              <p className="mb-4">
                Australian citizens enjoy many rights, but also have important responsibilities.
              </p>
              <p className="mb-4">
                <strong>Responsibilities—what you will give Australia</strong>
              </p>
              <p className="mb-4">
                As an Australian citizen you must:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>Obey the laws of Australia</li>
                <li>Vote in federal and state or territory elections, and in a referendum</li>
                <li>Defend Australia should the need arise</li>
                <li>Serve on a jury if called to do so</li>
              </ul>
              <p className="mb-4">
                <strong>Privileges—what Australia will give you</strong>
              </p>
              <p className="mb-4">
                As an Australian citizen you can:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>Vote in federal and state or territory elections, and in a referendum</li>
                <li>Apply for children born overseas to become Australian citizens by descent</li>
                <li>Apply for a job in the Australian Public Service or in the Australian Defence Force</li>
                <li>Seek election to parliament</li>
                <li>Apply for an Australian passport and re-enter Australia freely</li>
                <li>Ask for consular assistance from an Australian official while overseas</li>
              </ul>
              <p className="mb-4">
                <strong>Participating in Australian society</strong>
              </p>
              <p className="mb-4">
                Australia encourages all citizens to participate in society. Active citizens take on the responsibility and 
                privilege of shaping Australia's future by joining community organizations, volunteering, and getting involved 
                in political life.
              </p>
              <p className="mb-4">
                Paying tax is another way citizens contribute to the community and is required by law. Taxes fund essential 
                services like healthcare, education, defense, and infrastructure.
              </p>
            </div>
          );
        }
      }
      
      // Part 3 content
      if (sectionId === 'part3') {
        if (subsectionId === 'how-say') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">How do I have my say?</h3>
              <p className="mb-4">
                <strong>Voting</strong>
              </p>
              <p className="mb-4">
                In Australia, citizens aged 18 years or over must enroll to vote in federal, state, and territory elections. 
                This gives you a say in how Australia is governed by voting for people to represent you in parliament.
              </p>
              <p className="mb-4">
                Voting is compulsory in Australia, reflecting the importance we place on participating in our democracy. 
                If you don't vote and don't have a valid reason, you may be fined.
              </p>
              <p className="mb-4">
                In Australia, we vote using a secret ballot system. No one can see or know how you voted unless you choose 
                to tell them. This ensures you can vote freely and without pressure.
              </p>
              <p className="mb-4">
                <strong>Raising matters with your representatives</strong>
              </p>
              <p className="mb-4">
                As an Australian citizen, you can contact your elected representatives to raise concerns about government 
                policies. This means every Australian can have input into forming laws and policies. If you tell your elected 
                representative that a law needs to be changed, they should consider your suggestion.
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'system-gov') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">How did we establish our system of government?</h3>
              <p className="mb-4">
                <strong>Federation</strong>
              </p>
              <p className="mb-4">
                Before 1901, Australia consisted of six separate British colonies. Each had its own constitution and laws 
                for defense, immigration, postage, trade, and transportation.
              </p>
              <p className="mb-4">
                The colonies faced challenges including expensive and slow trade, difficult law enforcement across borders, 
                and weak defense systems. This led to a desire to unite as one nation.
              </p>
              <p className="mb-4">
                On January 1, 1901, the colonies united to form the Commonwealth of Australia, creating what we now know 
                as the states of the Australian federation.
              </p>
              <p className="mb-4">
                <strong>The Australian Constitution</strong>
              </p>
              <p className="mb-4">
                The Commonwealth of Australia Constitution Act 1900 is the legal document that sets out the basic rules for 
                the government of Australia. It was originally passed as a British Act of Parliament in 1900 and came into 
                effect on January 1, 1901.
              </p>
              <p className="mb-4">
                The Australian Constitution established the Parliament of the Commonwealth of Australia with a House of 
                Representatives and a Senate. It also established the High Court of Australia, which has the power to apply 
                and interpret the laws of Australia.
              </p>
              <p className="mb-4">
                The Australian people can change the Constitution by voting in a referendum. To change the Constitution, 
                there must be a "double majority" - a majority of voters in a majority of states, as well as a majority 
                of voters across the nation.
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'power-control') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">How is the power of government controlled?</h3>
              <p className="mb-4">
                The Australian Constitution divides power among three branches to prevent any single group from having 
                too much control:
              </p>
              <p className="mb-4">
                <strong>Legislative power</strong> (Parliament) - the power to make laws. The Parliament consists of 
                representatives elected by the people of Australia and has the authority to create and change laws.
              </p>
              <p className="mb-4">
                <strong>Executive power</strong> (Government) - the power to put laws into practice. The Executive includes 
                the Prime Minister, Australian Government ministers, and the Governor-General. Ministers oversee government 
                departments responsible for implementing Parliament's laws.
              </p>
              <p className="mb-4">
                <strong>Judicial power</strong> (Courts) - the power to interpret and apply laws. Judges have the authority 
                to determine how laws apply in specific cases. Courts and judges operate independently from Parliament and 
                government.
              </p>
              <p className="mb-4">
                This separation of powers creates a system of checks and balances, ensuring that no single branch of 
                government can exercise absolute power.
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'head-state') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">Who is Australia's Head of State?</h3>
              <p className="mb-4">
                Australia's Head of State is the King of Australia, His Majesty King Charles III. The King appoints the 
                Governor-General as his representative in Australia, based on the recommendation of the Australian Prime 
                Minister. The Governor-General acts independently of all political parties.
              </p>
              <p className="mb-4">
                The King does not have a day-to-day role in government. In Australia, the Governor-General acts as the 
                King's representative and performs many of the formal duties typically associated with a Head of State.
              </p>
              <p className="mb-4">
                In each state, a Governor represents the King in a role similar to the Governor-General.
              </p>
              <p className="mb-4">
                <strong>Constitutional monarchy</strong>
              </p>
              <p className="mb-4">
                Australia is a constitutional monarchy, which means that while the King is Australia's Head of State, 
                he must act according to the Constitution. Since the King does not reside in Australia, his powers are 
                delegated to the Governor-General.
              </p>
              <p className="mb-4">
                The Australian system of parliamentary democracy combines British and North American traditions in a 
                uniquely Australian way. In the Australian system, the leader of the Australian Government is the 
                Prime Minister.
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'leaders') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">Who are some of Australia's leaders?</h3>
              <p className="mb-4">
                <strong>Head of State</strong> - The King of Australia
              </p>
              <p className="mb-4">
                <strong>Governor-General</strong> - The representative of the Head of State in Australia
              </p>
              <p className="mb-4">
                <strong>Governor</strong> - The representative of the Head of State in each Australian state
              </p>
              <p className="mb-4">
                <strong>Prime Minister</strong> - The leader of the Australian Government
              </p>
              <p className="mb-4">
                <strong>Premier</strong> - The leader of a state government
              </p>
              <p className="mb-4">
                <strong>Chief Minister</strong> - The leader of a territory government
              </p>
              <p className="mb-4">
                <strong>Government minister</strong> - A Member of Parliament chosen by a government leader to be 
                responsible for an area of government
              </p>
              <p className="mb-4">
                <strong>Member of Parliament (MP)</strong> - An elected representative of the people in the Australian 
                Parliament or a state parliament
              </p>
              <p className="mb-4">
                <strong>Senator</strong> - An elected representative of a state or territory in the Australian Parliament
              </p>
              <p className="mb-4">
                <strong>Mayor or Shire President</strong> - The leader of a local government
              </p>
              <p className="mb-4">
                <strong>Councillor</strong> - An elected member of a local council
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'how-governed') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">How is Australia governed?</h3>
              <p className="mb-4">
                <strong>The Australian Government</strong>
              </p>
              <p className="mb-4">
                The Australian Government is also called the Federal Government or the Commonwealth Government. 
                The Government is made up of Members of Parliament from two Houses:
              </p>
              <ul className="mb-4 list-disc pl-6">
                <li>The House of Representatives</li>
                <li>The Senate</li>
              </ul>
              <p className="mb-4">
                <strong>The House of Representatives</strong>
              </p>
              <p className="mb-4">
                The House of Representatives is often called the Lower House or the People's House. Australia is divided 
                into federal electorates, and voters in each electorate elect one person to represent them in the House 
                of Representatives.
              </p>
              <p className="mb-4">
                The number of Members of Parliament (MPs) for each state and territory is based on its population. 
                In total, there are over 150 members elected to the House of Representatives.
              </p>
              <p className="mb-4">
                <strong>The Senate</strong>
              </p>
              <p className="mb-4">
                The Senate is often called the Upper House, the House of Review, or the States' House. Senators represent 
                states and territories. All states, regardless of their size or population, elect the same number of senators. 
                There are 12 senators for each state and two senators for each mainland territory, making a total of 
                76 senators.
              </p>
              <p className="mb-4">
                Both the House of Representatives and the Senate debate and vote on proposed new laws.
              </p>
              <p className="mb-4">
                <strong>State and territory governments</strong>
              </p>
              <p className="mb-4">
                There are six states and two main territories in Australia. Each has its own parliament and constitution. 
                State and territory governments are based in their capital cities. The leader of a state government is 
                called the Premier, and the leader of a territory government is called the Chief Minister.
              </p>
              <p className="mb-4">
                <strong>Local government</strong>
              </p>
              <p className="mb-4">
                States and the Northern Territory are divided into local government areas, which may be called cities, 
                shires, towns, or municipalities. Each area has its own local council, which is responsible for providing 
                services to the local community. Citizens in each local government area elect their local councillors.
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'laws-made') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">How are laws made?</h3>
              <p className="mb-4">
                The Australian Parliament has the power to make and change laws in Australia to benefit the nation.
              </p>
              <p className="mb-4">
                When a member of the Australian Parliament proposes a new law or changes to an existing law, this 
                proposal is called a "Bill."
              </p>
              <p className="mb-4">
                The process of creating a law follows these steps:
              </p>
              <ol className="mb-4 list-decimal pl-6">
                <li>The House of Representatives and the Senate debate, discuss, and vote on the Bill.</li>
                <li>If the majority of members in each House of Parliament agree to the Bill, it is sent to the Governor-General.</li>
                <li>The Governor-General signs the Bill, making it a law. This is called "Royal Assent."</li>
              </ol>
              <p className="mb-4">
                State and territory parliaments have a similar process for making laws within their jurisdictions.
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'laws-enforced') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">How are laws enforced?</h3>
              <p className="mb-4">
                <strong>The courts</strong>
              </p>
              <p className="mb-4">
                Australian courts are independent institutions. Courts determine whether a person has or has not broken 
                the law and decide the appropriate penalty. Courts can only base their decisions on the evidence presented to them.
              </p>
              <p className="mb-4">
                <strong>Judges and magistrates</strong>
              </p>
              <p className="mb-4">
                Judges and magistrates are the highest authorities in a court. They are independent officials who cannot 
                be told what to decide. Judges and magistrates are appointed by the government, but the government cannot 
                remove them from their positions for disagreeing with their decisions.
              </p>
              <p className="mb-4">
                <strong>Juries</strong>
              </p>
              <p className="mb-4">
                In Australia's court system, people are considered innocent until proven guilty. Everyone has the right 
                to legal representation in court.
              </p>
              <p className="mb-4">
                Some cases use a jury to decide if a person is innocent or guilty. A jury is a group of ordinary citizens 
                randomly selected from the general population. The judge explains the law to the jury. In a criminal trial, 
                if the jury finds a person guilty, the judge decides the penalty.
              </p>
              <p className="mb-4">
                <strong>The police</strong>
              </p>
              <p className="mb-4">
                Police maintain peace and order in the community. They protect life and property and enforce the law. 
                They are independent of the government. If police believe someone has broken the law, they can arrest 
                them and bring them before a court.
              </p>
              <p className="mb-4">
                Australia has police forces in each state and territory, as well as the Australian Federal Police (AFP), 
                which investigates crimes against federal laws.
              </p>
              <p className="mb-4">
                In Australia, bribing a police officer is a serious crime. Even offering a bribe to a police officer is 
                against the law.
              </p>
            </div>
          );
        }
      }
      
      // Part 4 content
      if (sectionId === 'part4') {
        if (subsectionId === 'values') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">Australian values</h3>
              <p className="mb-4">
                Australian values based on freedom, respect, fairness, and equality of opportunity are central to our 
                community remaining a secure, prosperous, and peaceful place to live.
              </p>
              <p className="mb-4">
                <strong>Commitment to the Rule of Law</strong>
              </p>
              <p className="mb-4">
                All Australians are protected by our laws and legal systems. Australians recognize the importance of laws 
                in maintaining a peaceful and orderly society. Everyone must obey the law, and no person or group is above the law.
              </p>
              <p className="mb-4">
                <strong>Parliamentary democracy</strong>
              </p>
              <p className="mb-4">
                Australia's system of government is a parliamentary democracy where laws are determined by parliaments 
                elected by the people. This means all citizens participate in how the country is governed through voting.
              </p>
              <p className="mb-4">
                <strong>Freedom of speech</strong>
              </p>
              <p className="mb-4">
                Australians can express their ideas freely within the law. This includes the right to speak and write about 
                any topic, to discuss ideas with others, and to protest peacefully against government actions.
              </p>
              <p className="mb-4">
                <strong>Freedom of association</strong>
              </p>
              <p className="mb-4">
                Australians have the right to associate with others freely and join or leave groups voluntarily. People can 
                gather to protest or oppose government decisions, provided they remain within the law.
              </p>
              <p className="mb-4">
                <strong>Freedom of religion</strong>
              </p>
              <p className="mb-4">
                Australia has no official religion. People may follow any religion of their choice or none at all. The government 
                treats all citizens equally regardless of their religion or beliefs. However, religious practices must comply 
                with Australian laws.
              </p>
              <p className="mb-4">
                <strong>Equality of all people under the law</strong>
              </p>
              <p className="mb-4">
                All Australians have equal rights and are treated equally under the law, regardless of their background. 
                Discrimination based on gender, sexual orientation, age, disability, religion, race, or ethnic origin is 
                prohibited.
              </p>
              <p className="mb-4">
                <strong>Equality of opportunity and a 'fair go'</strong>
              </p>
              <p className="mb-4">
                Australians value equal opportunity and believe everyone deserves a 'fair go'. Success should be based on 
                a person's talents, work, and effort, not their wealth or background.
              </p>
              <p className="mb-4">
                <strong>Mutual respect and tolerance for others</strong>
              </p>
              <p className="mb-4">
                Australians believe in mutual respect, tolerance, and fair treatment. This includes listening to others' 
                views even when they differ from our own. Racism and discrimination have no place in Australian society.
              </p>
            </div>
          );
        }
        
        if (subsectionId === 'community') {
          return (
            <div className="prose max-w-none">
              <h3 className="text-xl font-bold mb-4">Our community</h3>
              <p className="mb-4">
                <strong>Making a contribution</strong>
              </p>
              <p className="mb-4">
                Citizenship provides the opportunity to fully participate in Australian life and community. All Australians 
                are expected to participate in society and make a contribution. Everyone has a responsibility to try and 
                support themselves and their families when able.
              </p>
              <p className="mb-4">
                <strong>Compassion for those in need</strong>
              </p>
              <p className="mb-4">
                Australians value 'mateship'—helping each other in times of need. This spirit of mateship has fostered a 
                strong tradition of community service and volunteering to support others and strengthen the community.
              </p>
              <p className="mb-4">
                <strong>English as the national language</strong>
              </p>
              <p className="mb-4">
                Australian society values English as the national language and as an important unifying element. People 
                living in Australia should make an effort to learn English, as it helps with education, employment, and 
                better integration into the community.
              </p>
              <p className="mb-4">
                <strong>Helping to keep our society safe</strong>
              </p>
              <p className="mb-4">
                All Australians have responsibilities to help protect society. For example, if someone suspects a serious 
                crime may be planned, they should report this to authorities to help protect the community's safety.
              </p>
              <p className="mb-4">
                <strong>Loyalty to Australia</strong>
              </p>
              <p className="mb-4">
                Australian citizens pledge loyalty to Australia and its people. Citizens may hold dual citizenship if other 
                countries allow it, but Australian laws must be followed by citizens at all times, even when overseas.
              </p>
              <p className="mb-4">
                Australian society is based on shared obligations not to undermine Australia's interests and security. 
                For example, sharing government secrets or promoting distrust of ethnic communities would damage Australia's 
                interests and community relations.
              </p>
              <p className="mb-4">
                In conclusion, our democratic institutions and shared Australian values have created our peaceful and stable 
                society. We have a rich and unique culture to share. As an Australian citizen, you become part of our nation's 
                story and contribute to our future.
              </p>
            </div>
          );
        }
      }
    
    
  
  
  // Default content if no specific content is found
  return (
    <div className="prose max-w-none">
      <h3 className="text-xl font-bold mb-4">{subsectionId}</h3>
      <p className="mb-4">
        This is placeholder content for this subsection. In a complete implementation, this would contain 
        the actual study material from the Australian Citizenship: Our Common Bond resource book.
      </p>
      <p>
        You can mark this section as complete when you've studied the material by clicking the 
        "Mark as Complete" button below.
      </p>
    </div>
  );
};

export default SubsectionContent;