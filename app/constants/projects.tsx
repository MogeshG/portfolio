export interface projectType {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
  longDescription: string;
}

const projects: projectType[] = [
  {
    id: 1,
    name: "Sticker App",
    description: "Developed backend for the android application",
    image: "/sticker.webp",
    url: "https://play.google.com/store/apps/details?id=com.skyraan.stickers",
    longDescription: `<p class="" data-start="203" data-end="582">I built a <strong data-start="213" data-end="255">full-stack sticker management platform</strong> featuring an <strong data-start="269" data-end="299">Express.js + MySQL backend</strong> and a <strong data-start="306" data-end="325">React dashboard</strong>, with the app live on the <strong data-start="352" data-end="366">Play Store</strong>. Users can explore and select from various <strong data-start="410" data-end="430">sticker packages</strong>, each containing multiple stickers. The backend uses <strong data-start="484" data-end="509">complex data mappings</strong> to efficiently handle package-sticker relationships and user selections.</p>
<h2 data-start="584" data-end="606">&nbsp;</h2>
<p style="font-size: 1.3rem" data-start="584" data-end="606"><strong>Key Highlights:</strong></p>
<ul data-start="607" data-end="1211">
<li class="" data-start="607" data-end="686">
<p class="" data-start="609" data-end="686">📦 <strong data-start="612" data-end="632">Sticker Packages</strong> &ndash; Organized collections of fun and creative stickers.</p>
</li>
<li class="" data-start="687" data-end="771">
<p class="" data-start="689" data-end="771">🖼️ <strong data-start="693" data-end="721">Stickers Inside Packages</strong> &ndash; Each package includes multiple unique stickers.</p>
</li>
<li class="" data-start="772" data-end="851">
<p class="" data-start="774" data-end="851">📲 <strong data-start="777" data-end="799">Live on Play Store</strong> &ndash; Fully functional app available for Android users.</p>
</li>
<li class="" data-start="852" data-end="1014">
<p class="" data-start="854" data-end="911">📊 <strong data-start="857" data-end="876">Admin Dashboard</strong> &ndash; Built with <strong data-start="890" data-end="899">React</strong>, featuring:</p>
<ul>
<li class="" data-start="852" data-end="1014">Authentication &amp; Authorization</li>
<li class="" data-start="852" data-end="1014">Package &amp; Sticker management</li>
<li class="" data-start="852" data-end="1014">Real-time updates and controls</li>
</ul>
</li>
<li class="" data-start="1015" data-end="1095">
<p class="" data-start="1017" data-end="1095">🔐 <strong data-start="1020" data-end="1038">Secure Backend</strong> &ndash; Express.js with MySQL, built with scalability in mind.</p>
</li>
<li class="" data-start="1096" data-end="1211">
<p class="" data-start="1098" data-end="1211">🔄 <strong data-start="1101" data-end="1121">Complex Mappings</strong> &ndash; Efficient handling of many-to-many relationships between users, packages, and stickers.</p>
</li>
</ul>
<p data-start="1213" data-end="1232">&nbsp;</p>
<p style="font-size: 1.3rem" data-start="1213" data-end="1232"><strong>Tech Stack:</strong></p>
<ul data-start="1233" data-end="1434">
<li class="" data-start="1233" data-end="1274">
<p class="" data-start="1235" data-end="1274"><strong data-start="1235" data-end="1246">Backend</strong>: Node.js, Express.js, MySQL</p>
</li>
<li class="" data-start="1275" data-end="1320">
<p class="" data-start="1277" data-end="1320"><strong data-start="1277" data-end="1299">Frontend Dashboard</strong>: React, Tailwind CSS</p>
</li>
<li class="" data-start="1321" data-end="1372">
<p class="" data-start="1323" data-end="1372"><strong data-start="1323" data-end="1337">Mobile App</strong>: Android (available on Play Store)</p>
</li>
<li class="" data-start="1373" data-end="1434">
<p class="" data-start="1375" data-end="1434"><strong data-start="1375" data-end="1383">Auth</strong>: Secure authentication &amp; role-based access control</p>
</li>
</ul>`,
  },
  {
    id: 2,
    name: "Math Learner App",
    description: "Developed backend for the android application",
    image: "/math.webp",
    url: "https://play.google.com/store/apps/details?id=com.skyraan.mathlearning",
    longDescription: `<p class="" data-start="363" data-end="792"><strong data-start="363" data-end="378">Math Learner App&nbsp;</strong>is an intuitive and scalable <strong data-start="408" data-end="429">learning platform</strong> built to help students master math through <strong data-start="473" data-end="508">grade-specific practice modules</strong>. The app features a structured flow from <strong data-start="550" data-end="601">Grades &rarr; Topics &rarr; Subtopics &rarr; Questions</strong>, allowing for personalized and organized learning. It&rsquo;s powered by an <strong data-start="672" data-end="702">Express.js + MySQL backend</strong>, with a dedicated <strong data-start="721" data-end="746">React admin dashboard</strong> for seamless content creation and management.</p>
<p class="" data-start="363" data-end="792">&nbsp;</p>
<p style="font-size: 1.3rem" data-start="794" data-end="815">Core Features:</p>
<ul data-start="816" data-end="1415">
<li class="" data-start="816" data-end="923">
<p class="" data-start="818" data-end="923">📚 <strong data-start="821" data-end="850">Grade-Wise Learning Paths</strong> &ndash; Students learn based on their grade level, ensuring relevant practice.</p>
</li>
<li class="" data-start="924" data-end="1039">
<p class="" data-start="926" data-end="1039">🔢 <strong data-start="929" data-end="953">Smart Categorization</strong> &ndash; Questions are neatly grouped into categories and subcategories for easy navigation.</p>
</li>
<li class="" data-start="1040" data-end="1125">
<p class="" data-start="1042" data-end="1125">❓ <strong data-start="1044" data-end="1069">Dynamic Question Bank</strong> &ndash; Rich, interactive questions to reinforce math skills.</p>
</li>
<li class="" data-start="1126" data-end="1313">
<p class="" data-start="1128" data-end="1184">🧑&zwj;💻 <strong data-start="1134" data-end="1150">Admin Portal</strong> &ndash; Built with <strong data-start="1164" data-end="1173">React</strong>, enabling:</p>
<ul data-start="1187" data-end="1313">
<li class="" data-start="1187" data-end="1222">
<p class="" data-start="1189" data-end="1222">Secure Login with Role Management</p>
</li>
<li class="" data-start="1225" data-end="1266">
<p class="" data-start="1227" data-end="1266">Effortless content creation and updates</p>
</li>
<li class="" data-start="1269" data-end="1313">
<p class="" data-start="1271" data-end="1313">Real-time question management and tracking</p>
</li>
</ul>
</li>
<li class="" data-start="1314" data-end="1415">
<p class="" data-start="1316" data-end="1415">⚙️ <strong data-start="1319" data-end="1337">Robust Backend</strong> &ndash; Efficient <strong data-start="1350" data-end="1374">many-to-one mappings</strong> for fast data retrieval and scalability.</p>
</li>
</ul>
<h2 data-start="1417" data-end="1436">&nbsp;</h2>
<p style="font-size: 1.3rem" data-start="1417" data-end="1436">Tech Stack:</p>
<ul data-start="1437" data-end="1596">
<li class="" data-start="1437" data-end="1478">
<p class="" data-start="1439" data-end="1478"><strong data-start="1439" data-end="1450">Backend</strong>: Node.js, Express.js, MySQL</p>
</li>
<li class="" data-start="1479" data-end="1521">
<p class="" data-start="1481" data-end="1521"><strong data-start="1481" data-end="1500">Admin Dashboard</strong>: React, Tailwind CSS</p>
</li>
<li class="" data-start="1522" data-end="1596">
<p class="" data-start="1524" data-end="1596"><strong data-start="1524" data-end="1543">Auth &amp; Security</strong>: JWT-based Authentication, Role-Based Access Control</p>
</li>
</ul>`,
  },
  {
    id: 3,
    name: "Video Maker App",
    description: "Automate video making using formatted excel data ",
    image: "/video-maker.png",
    url: "",
    longDescription: `<p data-start="138" data-end="160">A <strong>robust</strong> and <strong>efficient</strong> application designed to automate video creation from Excel-based Bible quotes using customizable templates. Combines <strong>image rendering</strong> and <strong>video processing</strong> to deliver high-quality, consistent output with <strong>minimal effort</strong>.</p>
<p class="" data-start="363" data-end="792">&nbsp;</p>
<p style="font-size: 1.3rem" data-start="409" data-end="430"><strong>Key Features:</strong></p>
<ul data-start="431" data-end="1015">
<li class="" data-start="431" data-end="543">
<p class="" data-start="433" data-end="543"><strong data-start="433" data-end="452">Template System</strong> &ndash; Create and manage reusable templates with custom fonts, colors, positioning, and sizing.</p>
</li>
<li class="" data-start="544" data-end="662">
<p class="" data-start="546" data-end="662"><strong data-start="546" data-end="566">Image Generation</strong> &ndash; Render visually styled images using <strong data-start="605" data-end="615">Canvas</strong> and precise font control with <strong data-start="646" data-end="661">opentype.js</strong>.</p>
</li>
<li class="" data-start="663" data-end="780">
<p class="" data-start="665" data-end="780"><strong data-start="665" data-end="693">Automated Video Creation</strong> &ndash; Seamlessly convert images into videos using <strong data-start="740" data-end="750">FFmpeg</strong>, supporting batch processing.</p>
</li>
<li class="" data-start="781" data-end="912">
<p class="" data-start="783" data-end="912"><strong data-start="783" data-end="802">Admin Dashboard</strong> &ndash; Intuitive React-based dashboard with full <strong data-start="847" data-end="855">CRUD</strong> functionality for managing templates and video projects.</p>
</li>
<li class="" data-start="913" data-end="1015">
<p class="" data-start="915" data-end="1015"><strong data-start="915" data-end="937">Efficient Workflow</strong> &ndash; Templates can be reused and modified, optimizing video generation at scale.</p>
</li>
</ul>
<h2 data-start="1417" data-end="1436">&nbsp;</h2>
<p style="font-size: 1.3rem" data-start="1417" data-end="1436"><strong>Tech Stack:</strong></p>
<ul>
<li class="" data-start="1042" data-end="1066">
<p class="" data-start="1044" data-end="1066"><strong data-start="1044" data-end="1056">Frontend</strong>: React.js</p>
</li>
<li class="" data-start="1067" data-end="1092">
<p class="" data-start="1069" data-end="1092"><strong data-start="1069" data-end="1080">Backend</strong>: Express.js</p>
</li>
<li class="" data-start="1093" data-end="1123">
<p class="" data-start="1095" data-end="1123"><strong data-start="1095" data-end="1115">Video Processing</strong>: FFmpeg</p>
</li>
<li class="" data-start="1124" data-end="1166">
<p class="" data-start="1126" data-end="1166"><strong data-start="1126" data-end="1145">Image Rendering</strong>: Canvas, opentype.js</p>
</li>
<li class="" data-start="1167" data-end="1191">
<p class="" data-start="1169" data-end="1191"><strong data-start="1169" data-end="1184">Data Source</strong>: Excel</p>
</li>
</ul>
<p>
&nbsp;
<p style="color: skyblue"><strong>
    <a href="https://github.com/Mogesh21/videoGenerator" target="_blank">Github Link</a></strong></p>
`,
  },
  {
    id: 4,
    name: "Image Format Converter App",
    description: "Simple format changer for your images",
    image: "/image-converter.png",
    url: "https://quick-image-converter.vercel.app/",
    longDescription: `<p class="" data-start="190" data-end="461">A <strong data-start="192" data-end="215">simple yet powerful</strong> web application built with <strong data-start="243" data-end="254">Next.js</strong> that allows users to convert images between formats quickly and efficiently. Supports both <strong data-start="346" data-end="356">single</strong> and <strong data-start="361" data-end="387">batch image conversion</strong>, delivering results in seconds with a clean and intuitive user interface.</p>
<p class="" data-start="190" data-end="461">&nbsp;</p>
<p style="font-size: 1.3rem" data-start="468" data-end="489">Key Features:</p>
<ul data-start="490" data-end="802">
<li class="" data-start="490" data-end="554">
<p class="" data-start="492" data-end="554">Convert images between popular formats (e.g., JPG, PNG, WebP).</p>
</li>
<li class="" data-start="555" data-end="624">
<p class="" data-start="557" data-end="624">Support for <strong data-start="569" data-end="589">batch conversion</strong> &ndash; process multiple images at once.</p>
</li>
<li class="" data-start="625" data-end="688">
<p class="" data-start="627" data-end="688"><strong data-start="627" data-end="649">Fast and efficient</strong> &ndash; optimized for speed and performance.</p>
</li>
<li class="" data-start="689" data-end="761">
<p class="" data-start="691" data-end="761">User-friendly interface focused on <strong data-start="726" data-end="740">simplicity</strong> and <strong data-start="745" data-end="760">ease of use</strong>.</p>
</li>
<li class="" data-start="762" data-end="802">
<p class="" data-start="764" data-end="802">Secure, client-friendly file handling.</p>
</li>
</ul>
<p>&nbsp;</p>
<p style="font-size: 1.3rem" data-start="809" data-end="828">Tech Stack:</p>
<ul data-start="829" data-end="1012">
<li class="" data-start="829" data-end="866">
<p class="" data-start="831" data-end="866"><strong data-start="831" data-end="844">Framework</strong>: Next.js (App Router)</p>
</li>
<li class="" data-start="867" data-end="891">
<p class="" data-start="869" data-end="891"><strong data-start="869" data-end="881">Frontend</strong>: React.js</p>
</li>
<li class="" data-start="892" data-end="954">
<p class="" data-start="894" data-end="954"><strong data-start="894" data-end="914">Image Processing</strong>: Sharp / Jimp (or the library you used)</p>
</li>
<li class="" data-start="955" data-end="1012">
<p class="" data-start="957" data-end="1012"><strong data-start="957" data-end="968">Styling</strong>: Tailwind CSS / CSS Modules</p>
</li>
    </ul>
    <p>&nbsp;</p>
    <p style="color: skyblue"><strong>
    <a href="https://github.com/MogeshG/image-converter" target="_blank">Github Link</a></strong></p>`,
  },
  {
    id: 5,
    name: "Queue Management App",
    description: "Developed backend for the android application",
    image: "/queue.png",
    url: "https://play.google.com/store/apps/details?id=com.skyraan.mathlearning",
    longDescription: `<p class="" data-start="225" data-end="512">A <strong data-start="227" data-end="275">fully functional cross-platform Electron app</strong> designed to streamline in-office meeting queues and task assignments. Built to eliminate idle waiting by allowing team members to <strong data-start="406" data-end="431">send meeting requests</strong> to the manager, receive <strong data-start="456" data-end="481">real-time invitations</strong>, and manage tasks efficiently.</p>
&nbsp;
    <p style="font-size: 1.3rem" class="" data-start="519" data-end="540">Key Features:</p>
<ul data-start="541" data-end="1133">
<li class="" data-start="541" data-end="661">
<p class="" data-start="543" data-end="661"><strong data-start="543" data-end="563">Queue Management</strong>: Users can request to meet the manager; requests are processed one by one with real-time updates.</p>
</li>
<li class="" data-start="662" data-end="747">
<p class="" data-start="664" data-end="747"><strong data-start="664" data-end="681">Group Invites</strong>: Managers can invite individuals or groups to meetings instantly.</p>
</li>
<li class="" data-start="748" data-end="865">
<p class="" data-start="750" data-end="865"><strong data-start="750" data-end="774">System Notifications</strong>: Users receive OS-level notifications when their request is accepted or an invite is sent.</p>
</li>
<li class="" data-start="866" data-end="1000">
<p class="" data-start="868" data-end="1000"><strong data-start="868" data-end="896">Task Manager (Jira-like)</strong>: Team Leaders can assign tasks/projects to team members; task visibility for TL, manager, and assignee.</p>
</li>
<li class="" data-start="1001" data-end="1133">
<p class="" data-start="1003" data-end="1133"><strong data-start="1003" data-end="1024">Real-Time Updates</strong>: Leveraged <strong data-start="1036" data-end="1064">Server-Sent Events (SSE)</strong> for efficient, real-time notifications without excessive DB polling.</p>
</li>
</ul>
&nbsp;
<p style="font-size: 1.3rem" class="" data-start="1140" data-end="1159">Tech Stack:</p>
<ul data-start="1160" data-end="1332">
<li class="" data-start="1160" data-end="1194">
<p class="" data-start="1162" data-end="1194"><strong data-start="1162" data-end="1174">Frontend</strong>: Electron, React.js</p>
</li>
<li class="" data-start="1195" data-end="1227">
<p class="" data-start="1197" data-end="1227"><strong data-start="1197" data-end="1208">Backend</strong>: Express.js, MySQL</p>
</li>
<li class="" data-start="1228" data-end="1276">
<p class="" data-start="1230" data-end="1276"><strong data-start="1230" data-end="1247">Notifications</strong>: Native system notifications</p>
</li>
<li class="" data-start="1277" data-end="1332">
<p class="" data-start="1279" data-end="1332"><strong data-start="1279" data-end="1306">Real-Time Communication</strong>: Server-Sent Events (SSE)</p>
</li>
</ul>`,
  },
  //   {
  //     id: 3,
  //     name: "Math Learner App",
  //     description: "Developed backend for the android application",
  //     image: "",
  //     url: "https://play.google.com/store/apps/details?id=com.skyraan.mathlearning",
  //   },
];

export default projects;
