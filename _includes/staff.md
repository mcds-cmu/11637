### Teaching Staff
{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

{% assign lead_teaching_assistants = site.staffers | where: 'role', 'Lead Teaching Assistant' %}
{% assign num_lead_teaching_assistants = lead_teaching_assistants | size %}
{% if num_lead_teaching_assistants != 0 %}
### Lead Teaching Assistants
{% for staffer in lead_teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}

{% assign teaching_assistants = site.staffers | where: 'role', 'Teaching Assistant' %}
{% assign num_teaching_assistants = teaching_assistants | size %}
{% if num_teaching_assistants != 0 %}
### Teaching Assistants
{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}
