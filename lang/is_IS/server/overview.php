<?php

return [
    'power_actions' => [
        'start' => 'Ræsa',
        'restart' => 'Endurræsa',
        'kill' => 'Drepa á',
        'shutdown' => 'Slökkva',
    ],
    'notices' => [
        'power_action_sent_success' => 'Beiðnin hefur verið send. Það má vera að úrvinnsla hennar taki andartak.',
        'power_action_sent_fail' => 'Það tókst ekki að senda beiðnina.',
    ],

    'state' => 'Staða',
    'states' => [
        'stopped' => 'Slökkt',
        'running' => 'Í gangi',
        'stopping' => 'Drepur á',
        'starting' => 'Ræsir',
        'shutting_down' => 'Slekkur',
    ],
    'uptime' => 'Uppitími',
    'poll_status_error' => 'Það tókst ekki að sækja stöðu þjónsins. Reyni aftur eftir 5 sekúndur...',

    'terminal' => [
        'title' => 'Skipanalína',
        'description' => 'Fjarstjórnaðu þjóninum í gegnum vefinn.',
        'novnc_description' => 'Virkar með flestum stýrikerfum en er afkastaminna.',
        'xtermjs_description' => 'Afkastamikið en virkar ekki með öllum stýrikerfum.',
    ],

    'server_config' => [
        'title' => 'Stilltu þjóninn',
        'description' => 'Þú ert stjórnandi! Þú getur smellt að neðan til að skoða byggingarstillingar þjónsins og breyta þeim.',
        'configure_server' => 'Stilla þjón',
    ],
];
