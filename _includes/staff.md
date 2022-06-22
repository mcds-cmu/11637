### Teaching Staff
{% assign instructors = site.staffers | where: 'role', 'Instructor' | sort:"list_order" %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

{% assign teaching_assistants = site.staffers | where: 'role', 'Teaching Assistant' | sort:"list_order" %}
{% assign num_teaching_assistants = teaching_assistants | size %}
{% if num_teaching_assistants != 0 %}
### Teaching Assistants
{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}

{% assign course_staff = site.staffers | where: 'role', 'Course Staff and Developers' | sort:"list_order" %}
{% assign num_course_staff = course_staff | size %}
{% if num_course_staff != 0 %}
### Course Staff and Developers
{% for staffer in course_staff %}
{{ staffer }}
{% endfor %}
{% endif %}

{% assign subject_matter_experts = site.staffers | where: 'role', 'Subject Matter Expert' | sort:"list_order" %}
{% assign num_subject_matter_experts = subject_matter_experts | size %}
{% if num_subject_matter_experts != 0 %}
### Subject Matter Experts
{% for staffer in subject_matter_experts %}
{{ staffer }}
{% endfor %}
{% endif %}