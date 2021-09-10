package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/clockworkgr/pactolus/x/pactolus/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateDenom() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-denom [denom] [description] [ticker] [precision] [url] [max-supply] [can-change-max-supply]",
		Short: "Create a new Denom",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) error {
			// Get indexes
			indexDenom := args[0]

			// Get value arguments
			argsDescription := args[1]
			argsTicker := args[2]
			argsPrecision, err := strconv.Atoi(args[3])

			if err != nil {
				return err
			}
			argsUrl := args[4]
			argsMaxSupply, err := strconv.Atoi(args[5])

			if err != nil {
				return err
			}
			argsCanChangeMaxSupply, err := strconv.ParseBool(args[6])

			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateDenom(
				clientCtx.GetFromAddress().String(),
				indexDenom,
				argsDescription,
				argsTicker,
				uint32(argsPrecision),
				argsUrl,
				uint64(argsMaxSupply),
				argsCanChangeMaxSupply,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateDenom() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-denom [denom] [description] [url] [max-supply] [can-change-max-supply]",
		Short: "Update a Denom",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			// Get indexes
			indexDenom := args[0]

			// Get value arguments
			argsDescription := args[1]
			argsUrl := args[2]
			argsMaxSupply, err := strconv.Atoi(args[3])
			if err != nil {
				return err
			}
			argsCanChangeMaxSupply, err := strconv.ParseBool(args[4])

			if err != nil {
				return err
			}
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateDenom(
				clientCtx.GetFromAddress().String(),
				indexDenom,
				argsDescription,
				argsUrl,
				uint64(argsMaxSupply),
				argsCanChangeMaxSupply,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
