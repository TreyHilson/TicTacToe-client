# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh

curl "https://sei-library-api.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "authorization: Token token=${token}"\
  --data

  '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'
echo
