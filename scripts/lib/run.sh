script_dir="`pwd`/`dirname $0`/"
root="$script_dir/../../"

docker run \
  -t \
  -i \
  -v $root:/home/tmpbuild/ \
  --user tmpbuild \
  2a277dae52a3 \
  "`cat $script_dir/$1`"
